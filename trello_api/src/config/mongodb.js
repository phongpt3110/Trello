/* eslint-disable no-console */

import { env } from '~/config/environment'
import { MongoClient, ServerApiVersion } from 'mongodb'

// Khởi tạo đối tượng bằng null khi chưa connect
let databaseInstance = null
// Tạo đối tượng connect đền mongodb server
const clientConnect = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})
// connect database
export const CONNECT_DB = async () => {
  // Gọi kết nối Mongodb Atlas với URI server
  await clientConnect.connect()
  databaseInstance = clientConnect.db(env.DATABASE_NAME)
}
// Kiểm tra kết nối database đã thành công hay chưa, và gọi ra database
export const GET_DB = () => {
  if (!databaseInstance) throw new Error('Must connect to Database first')
  return databaseInstance
}

export const CLOSE_DB = async () => {
  await clientConnect.close()
  console.log('5. Disconnected from MongoDB successfully')
}