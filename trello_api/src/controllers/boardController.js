import { StatusCodes } from 'http-status-codes'


// Tạo ra một controller để xử lý logic, trung chuyển dữ liệu - nhận request từ client
const createNew = async (req, res, next) => {
  try {
    console.log(req.body) // Nhận dữ liệu thông qua body
    res.status(StatusCodes.CREATED).json({ message: 'POST form Contro: Create form board' })
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: new Error(err).message })
  }
}

export const boardController = {
  createNew
}