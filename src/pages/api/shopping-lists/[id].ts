import { shoppingListInterface } from '@/interfaces'
import { prisma } from '@/services/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function shoppingListHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const shoppingList = await prisma.shoppingList.findMany()

    return res.json(shoppingList)
  }

  if (req.method === 'POST') {
    const { name = '', status = '', products = [] } = req.body as shoppingListInterface

    if (name === '' || status === '') {
      return res.status(400).json({ msg: 'name and status must be provided' })
    }

    if (products.length === 0) {
      return res.status(400).json({
        msg: 'must provide an array of products with 1 length minimum',
        example: [{ productId: 2, quantity: 2 }]
      })
    }

    const shoppingListProducts = products.map((product) => {
      const { productId, quantity } = product

      return {
        quantity,
        product: {
          connect: {
            id: productId
          }
        }
      }
    })

    try {
      const newShoppingList = await prisma.shoppingList.create({
        data: {
          name,
          status,
          products: {
            create: shoppingListProducts
          }
        }
      })

      return res.status(201).json(newShoppingList)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ msg: 'INTERNAL_SERVER_ERROR' })
    }
  }

  return res.status(405).json({ msg: 'METHOD_NOT_ALLOWED' })
}
