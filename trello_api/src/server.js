/* eslint-disable no-console */

import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'
import { env } from '~/config/environment'

const START_SERVER = () => {
  const app = express()

  app.get('/', async (req, res) => {
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`3. Hello ${env.AUTHOR} DEV, I am running at http://${ env.APP_HOST }:${ env.APP_PORT }/`)
  })
  // Thêm tác vụ clenup trước khi dừng server
  exitHook( () => {
    console.log('4. Disconnecting...')
    CLOSE_DB()
    console.log('5. Disconnected from MongoDB successfully')
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