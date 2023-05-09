import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/services/prisma'
import { ShoppingListUpdate } from '@/interfaces'

export async function shoppingListByIdHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id = '' } = req.query
  const { products = [], status = 'incomplete' } =
    req.body as ShoppingListUpdate

  const shoppingListId = Number(id)

  if (req.method === 'GET') {
    if (!Number.isInteger(shoppingListId)) {
      return res.status(400).json({ msg: 'provide a valid id' })
    }

    try {
      const shoppingList = await prisma.shoppingList.findUnique({
        where: {
          id: shoppingListId
        },
        include: {
          products: {
            select: {
              id: true,
              quantity: true,
              product: true
            }
          }
        }
      })

      return shoppingList === null
        ? res.status(404).json({ msg: 'No shopping list found' })
        : res.json(shoppingList)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ msg: 'INTERNAL_SERVER_ERROR' })
    }
  }

  if (req.method === 'PATCH') {
    if (!Number.isInteger(shoppingListId)) {
      return res.status(400).json({ msg: 'provide a valid id' })
    }

    if (products.length === 0) {
      return res.status(400).json({
        msg: 'must provide an array of products with 1 length minimum',
        example: [{ productId: 2, quantity: 2, completed: true }]
      })
    }

    const shoppingListProducts = products.map((product) => {
      const { productId, completed = false } = product

      return {
        data: {
          completed
        },
        where: {
          productId
        }
      }
    })

    try {
      const shoppingList = await prisma.shoppingList.update({
        where: {
          id: shoppingListId
        },
        data: {
          status,
          products: {
            updateMany: shoppingListProducts
          }
        }
      })

      return res.json(shoppingList)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ msg: 'INTERNAL_SERVER_ERROR' })
    }
  }

  return res.status(405).json({ msg: 'METHOD_NOT_ALLOWED' })
}
