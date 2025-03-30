/* eslint-disable no-useless-catch */
// import ApiError from '~/utils/ApiError'
import { slugify } from '~/utils/formatters'
import { boardModel } from '~/models/boardModel'


const createNew = async (reqBody) => {

  try {
    // lấy thông tin từ client
    const newBoard = await {
      ...reqBody,
      slug: slugify(reqBody.title)
    }

    // 1. Gọi đến tầng Model để lưu cơ sở dữ liệu
    const newData = await boardModel.createNew(newBoard)

    // Lấy dữ liệu từ trong bảng ra
    const getNewBoard = await boardModel.findOneById(newData.insertedId)
    // console.log(getNewBoard)
    // 2. Thêm các xử lý logic từ các Collection khác

    // 3. Trả về kết quả hoàn tất
    return getNewBoard
  }
  catch (error) {
    throw error
  }
}


export const boardService = {
  createNew
}