import { LogTypes } from "@/store"
import dayjs from "dayjs"

export function getDateInMonth(year = dayjs().year(), month = dayjs().month()) {
   const monthDays = (m: number) => dayjs().year(year).month(m)

   const datesArray = []

   for (let j = 0; j <= month; j++) {
      for (let i = 1; i <= monthDays(j).endOf("month").date(); i++) {
         datesArray.push(monthDays(j).date(i).format("YYYY-MM-DD"))

         if (dayjs(new Date()).month() === j && dayjs(new Date()).date() === i) {
            break
         }
      }
   }

   return datesArray
}

export const getColor = (value: number) => {
   if (value === 0) {
      return "#e2e8f0"
   } else if (value < 5) {
      return "#bbf7d0"
   } else if (value < 10) {
      return "#4ade80"
   } else {
      return "#16a34a"
   }
}

export const validateLog = (log: LogTypes) => {
   if (!log.date || !log.hour || log.hour === 0) {
      throw "Date or hour can not be empty."
   } else if (log.hour >= 24) {
      throw "Please enter a valid hour."
   } else if (log.date > new Date()) {
      throw "Please enter a valid date."
   }
}
