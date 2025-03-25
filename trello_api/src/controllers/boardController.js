import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

// Tạo ra một controller để xử lý logic, trung chuyển dữ liệu - nhận request từ client
const createNew = async (req, res, next) => {

  try {

    console.log(req.body) // Nhận dữ liệu thông qua body
    res.status(StatusCodes.CREATED).json({ message: 'POST form Contro: Create form board' })
    // throw new ApiError(StatusCodes.BAD_REQUEST, 'Windydev test error') test lỗi middleware

  } catch (err) {
    // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: new Error(err).message })
    next(err)} // Chuyển hướng đến middleware xử lý lỗi
}

export const boardController = {
  createNew
}