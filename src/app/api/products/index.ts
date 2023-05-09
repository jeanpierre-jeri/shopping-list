import { uploadImageCloudinary } from '@/services/cloudinary'
import { prisma } from '@/services/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
interface productInputInterface {
  name: string
  categoryId?: number
  image?: string
  note?: string
  categoryName?: string
}

export async function productHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'DELETE') {
    const { productId = 0 } = req.body
    if (isNaN(productId)) {
      return res.status(401).json({
        msg: 'Product name must be valid '
      })
    }
    try {
      const id = Number(productId)
      await prisma.product.delete({
        where: {
          id
        }
      })

      return res.status(200).json({
        msg: 'Product delete succefull'
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        msg: 'Error deleting a product'
      })
    }
  }
  if (req.method === 'POST') {
    const {
      name = '',
      categoryId = 0,
      image = '',
      note = '',
      categoryName = ''
    } = req.body as productInputInterface

    if (name.trim() === '' || isNaN(categoryId)) {
      return res.status(401).json({
        msg: 'Product name is required and categoryId must be valid Id'
      })
    }

    let id = categoryId

    if (id === 0) {
      if (categoryName === '') {
        return res.status(401).json({
          msg: 'Must provide a category name'
        })
      }

      const newCategory = await prisma.category.create({
        data: { name: categoryName }
      })

      id = newCategory.id
    }

    const imageUrl = image === '' ? '' : await uploadImageCloudinary(image)

    try {
      const product = await prisma.product.create({
        data: {
          name,
          categoryId: Number(id),
          image: imageUrl,
          note
        }
      })
      return res.status(201).json({ product })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error })
    }
  }
}
