/* eslint-disable no-useless-catch */
// import ApiError from '~/utils/ApiError'
import { slugify } from '~/utils/formatters'


const createNew = async (reqBody) => {
  try {
    const newBoard = await {
      ...reqBody,
      slugify: slugify(reqBody.title)
    }

    // 1. Gọi đến tầng Model để lưu cơ sở dữ liệu
    // 2. Thêm các xử lý logic từ các Collection khác
    // 3. Trả về kết quả hoàn tất
  
    return newBoard
  }
  catch (error) {
    throw error
  }
}


export const boardService = {
  createNew
}