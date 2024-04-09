import express from 'express'
import { createDate, getAllDates, getDateById, getDateFiltered, updateDate } from "../controllers/dateControllers.js";

export const datesRouter = express.Router();

// Get all dates
datesRouter.get('/', getAllDates)
// Get date by filter
datesRouter.get('/filter', getDateFiltered)
// Get date by id
datesRouter.get('/:id', getDateById)
// Create new date
datesRouter.post('/', createDate)
// Update date
datesRouter.put('/:id', updateDate)