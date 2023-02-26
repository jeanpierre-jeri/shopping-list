import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface productInputInterface {
  name: string
  categoryId: number
  image?: string
  note?: string

}

export default async function productHandler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(404).json({ mssg: 'Request doenst exists' })
  }
  const {
    name,
    categoryId,
    image,
    note
  } = req.body as productInputInterface
  if (name.trim() === '' || isNaN(categoryId)) return res.status(401).json({ mssg: 'Product name is required and categoryId must be valid Id' })
  try {
    const product = await prisma.product.create({
      data: {
        name,
        categoryId: Number(categoryId),
        image,
        note
      }
    })
    return res.status(201).json({ product })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
