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
    res.status(404).json({ mssg: 'Request doenst exists' })
  }
  const {
    name,
    categoryId,
    image,
    note
  } = req.body as productInputInterface
  if (name.trim() === '' && isNaN(categoryId)) return res.status(401).json({ mssg: 'Product name and category is required' })

  const product = await prisma.product.create({
    data: {
      name,
      categoryId,
      image,
      note
    }
  })
  return product
}
