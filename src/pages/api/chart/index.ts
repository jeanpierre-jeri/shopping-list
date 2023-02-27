import { NextApiResponse, NextApiRequest } from 'next'
import { prisma } from '@/services/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ msg: 'METHOD_NOT_ALLOWED' })

  const shoppingLists = await prisma.productShoppingList.findMany()

  return res.json(shoppingLists)
}
