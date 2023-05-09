import { NextApiResponse, NextApiRequest } from 'next'
import { prisma } from '@/services/prisma'

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ msg: 'METHOD_NOT_ALLOWED' })
  }

  const shoppingLists = await prisma.productShoppingList.groupBy({
    by: ['createdAt', 'productId'],
    _sum: {
      quantity: true
    },
    orderBy: {
      createdAt: 'asc'
    },
    take: 12
  })

  const shoppingListsWithProductNames = await Promise.all(
    shoppingLists.map(async ({ productId, _sum, createdAt }) => {
      const product = await prisma.product.findUnique({
        where: {
          id: productId
        }
      })

      const date = new Date(createdAt).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
      })

      return {
        productId,
        productName: product?.name,
        quantity: _sum.quantity,
        createdAt: date
      }
    })
  )

  const shoppingListResponse: Map<string, any> = new Map()

  shoppingListsWithProductNames.forEach(
    ({ createdAt, productName, quantity }) => {
      const hasItem = shoppingListResponse.has(createdAt)

      if (hasItem) {
        const item = shoppingListResponse.get(createdAt)
        const qty =
          item[productName as string] === undefined
            ? Number(quantity)
            : Number(item[productName as string]) + Number(quantity)
        shoppingListResponse.set(createdAt, {
          ...item,
          [productName as string]: qty
        })
      } else {
        shoppingListResponse.set(createdAt, {
          name: createdAt,
          [productName as string]: Number(quantity)
        })
      }
    }
  )

  const names = new Set<any>()

  const list = Array.from(shoppingListResponse.values()).map((item) => {
    const { name, ...rest } = item

    const entries = Object.entries(rest)
      .sort((a, b) => Number(b[1]) - Number(a[1]))
      .slice(0, 3)

    entries.forEach((entry) => {
      names.add(entry[0])
    })

    return {
      name,
      ...Object.fromEntries(entries)
    }
  })

  return res.json({ stats: list, names: Array.from(names) })
}
