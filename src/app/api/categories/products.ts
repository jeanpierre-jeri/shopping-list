import { NextApiResponse, NextApiRequest } from 'next'
import { prisma } from '@/services/prisma'

export async function handlerProducts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(404).json({ mssg: 'METHOD_NOT_ALLOWED' })
  }
  const categoriesWithProducts = await prisma.category.findMany({
    include: {
      products: true
    }
  })
  return res.json(categoriesWithProducts)
}
