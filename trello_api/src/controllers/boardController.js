/* eslint-disable no-console */
import { StatusCodes } from 'http-status-codes'
// import ApiError from '~/utils/ApiError'
import { boardService } from '~/services/boardService'

// Tạo ra một controller để xử lý logic, trung chuyển dữ liệu - nhận request từ client
const createNew = async (req, res, next) => {
  try {
    // Điều hướng dữ liệu qua tầng service / input nhận giá trị FE
    const createdBoard = await boardService.createNew(req.body)
    // Kết quả trả về phía client
    res.status(StatusCodes.CREATED).json(createdBoard)
    // throw new ApiError(StatusCodes.BAD_REQUEST, 'Windydev test error') test lỗi middleware
  } catch (err) {
    // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: new Error(err).message })
    next(err)} // Chuyển hướng đến middleware xử lý lỗi
}
// Tạo ra một controller để xử lý logic, trung chuyển dữ liệu - nhận request từ client
const createNew = async (req, res, next) => {
  try {
    // Điều hướng dữ liệu qua tầng service / input nhận giá trị FE
    const createdBoard = await boardService.createNew(req.body)
    // Kết quả trả về phía client
    res.status(StatusCodes.CREATED).json(createdBoard)
    // throw new ApiError(StatusCodes.BAD_REQUEST, 'Windydev test error') test lỗi middleware
  } catch (err) {
    // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: new Error(err).message })
    next(err)} // Chuyển hướng đến middleware xử lý lỗi
}

export const boardController = {
  createNew
}