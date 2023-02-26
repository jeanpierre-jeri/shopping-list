import { prisma } from '@/services/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

interface shoppingListInterface {
  name: string
  status: string
}

export default async function shoppingListHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query
    if (id !== '') {
      const shoppingListFound = await prisma.shoppingList.findUnique(id)
      return res.status(201).json({ shoppingListFound })
    }

    const shoppingList = await prisma.shoppingList.findMany()

    return res.json({ shoppingList })
  }
  if (req.method === 'POST') {
    const {
      name,
      status
    } = req.body as shoppingListInterface

    const newShoppingList = await prisma.shoppingList.create({ data: { name, status } })

    return res.status(201).json({ newShoppingList })
  }
}
