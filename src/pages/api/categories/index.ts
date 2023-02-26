import { NextApiResponse, NextApiRequest } from 'next'
import { prisma } from '@/services/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const categories = await prisma.category.findMany()

    return res.json(categories)
  }

  if (req.method === 'POST') {
    const data = req.body
    const { name = '' } = data

    if (name === '') {
      return res.status(400).json({ msg: 'BAD_REQUEST', error: 'name must be provided' })
    }

    try {
      const newCategory = await prisma.category.create({ data: { name } })

      return res.status(201).json(newCategory)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ msg: 'INTERNAL_SERVER_ERROR' })
    }
  }

  return res.status(405).json({ msg: 'METHOD_NOT_ALLOWED' })
}
