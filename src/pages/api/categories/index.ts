import { NextApiResponse, NextApiRequest } from 'next'
import { prisma } from '@/services/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.method)

  if (req.method === 'GET') {
    const categories = await prisma.category.findMany()

    return res.json(categories)
  }

  if (req.method === 'POST') {
    const data = req.body

    const newCategory = await prisma.category.create({ data })

    return res.json(newCategory)
  }
}
