import { prisma } from '@/services/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function shoppingListByIdHandler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id = '' } = req.query
    const currentId = id.toString()
    if (currentId === '') {
      return res.status(401).json({ mssg: 'Invalid id' })
    }

    try {
      const shoppingListFound = await prisma.shoppingList.findUnique({ where: { id: +currentId } })
      if (shoppingListFound === null) {
        return res.status(401).json({ mssg: 'shoppingList not found' })
      }
      return res.status(201).json(shoppingListFound)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}
