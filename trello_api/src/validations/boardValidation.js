/* eslint-disable no-console */
import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
  // Tạo ra cái điều kiện để validate
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(20).trim().strict(),
    description: Joi.string().required().min(3).max(255).trim().strict()
  })
  try {
    await correctCondition.validateAsync(req.body, { abortEarly: false }) // Validate dữ liệu
    // Kiểm tra xem dữ liệu đã được validate hơp lệ, chuyển tiếp tới controller or middleware
    next()
  } catch (e) {
    console.log(e)
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ error: new Error(e).message })
  }
}

export const boardValidation = {
  createNew
}