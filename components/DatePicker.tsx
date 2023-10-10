"use client"

import * as React from "react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useLogStore } from "@/store"
import { CalendarIcon } from "lucide-react"

export function DatePicker() {
   const [isCalendarOpen, setIsCalendarOpen] = React.useState(false)
   const { log, setLog } = useLogStore()

   return (
      <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
         <PopoverTrigger asChild>
            <Button
               variant={"outline"}
               className={cn("justify-start text-left font-normal col-span-3", !log.date && "text-muted-foreground")}
            >
               <CalendarIcon className="mr-2 h-4 w-4" />
               {log.date ? format(log.date, "PPP") : <span>Pick a date</span>}
            </Button>
         </PopoverTrigger>
         <PopoverContent className="w-auto p-0" align="start">
            <Calendar
               mode="single"
               selected={log.date}
               onSelect={(e: any) => {
                  setLog({ ...log, date: e })
                  setIsCalendarOpen(false)
               }}
               initialFocus
            />
         </PopoverContent>
      </Popover>
   )
}
