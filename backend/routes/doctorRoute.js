import express from 'express'
import { doctorList } from '../controllers/doctorController'

const doctorRouter = express.Route()

doctorRouter.get('/list', doctorList)

export default doctorRouter