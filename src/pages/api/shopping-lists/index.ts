import { prisma } from '@/services/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

interface shoppingListInterface {
  name: string
  status: string
}

export default async function shoppingListHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const shoppingList = await prisma.shoppingList.findMany()

    return res.json(shoppingList)
  }
  if (req.method === 'POST') {
    const {
      name,
      status
    } = req.body as shoppingListInterface

    const newShoppingList = await prisma.shoppingList.create({
      data: {
        name,
        status
        // products: {
        //   create: [
        //     {
        //       quantity: 2,
        //       product: {
        //         connect: {
        //           id: 1
        //         }
        //       }
        //     }
        //   ]
        // }
      }
    })

    return res.status(201).json(newShoppingList)
  }
}
