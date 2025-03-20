/* eslint-disable no-console */

import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'
import { env } from '~/config/environment'
import { API_V1 } from '~/routes/v1'

const START_SERVER = () => {
  const app = express()

  // Viết router khi server xử lý
  app.use('/v1', API_V1)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`3. Hello ${env.AUTHOR} DEV, I am running at http://${ env.APP_HOST }:${ env.APP_PORT }/`)
  })
  // Thêm tác vụ clenup trước khi dừng server
  exitHook( () => {
    console.log('4. Disconnecting...')
    CLOSE_DB()
    process.exit(0)
  })
}


(async () => {
  try {
    console.log('1. Connecting to MongoDB Alats...')
    await CONNECT_DB()
    console.log('2. Connected to MongoDB successfully')
    START_SERVER()
  }
  catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
})()