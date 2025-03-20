import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRouter } from '~/routes/v1/boardRoute'

const Router = express.Router()

// Check APIs
Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'Api v1 đã chuẩn bị sử dụng' })
})

// BoadsAPis
Router.use('/boards', boardRouter)

export const API_V1 = Router