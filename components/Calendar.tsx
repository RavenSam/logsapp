"use client"
import React from "react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { useLogStore } from "@/store"
import { getColor, getDateInMonth } from "@/helpers/funcs"

export default function Calendar() {
   const { logs } = useLogStore()

   return (
      <div className="border rounded-xl p-2">
         <div className="grid grid-rows-[repeat(7,minmax(0,1fr))] grid-flow-col-dense gap-[2px] overflow-x-auto">
            {getDateInMonth().map((value, index) => (
               <HoverCard key={index}>
                  <HoverCardTrigger>
                     <div
                        className="h-5 w-5  rounded-sm cursor-pointer"
                        style={{ backgroundColor: getColor(logs[value]?.hour || 0) }}
                     />
                  </HoverCardTrigger>
                  <HoverCardContent className="opacity-70 rounded-xl w-fit">
                     {logs[value]?.hour || 0} hours on {value}
                  </HoverCardContent>
               </HoverCard>
            ))}
         </div>
      </div>
   )
}
