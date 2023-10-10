"use client"
import React from "react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useLogStore } from "@/store"
import { format } from "date-fns"
import { Calendar, Hourglass, StickyNote } from "lucide-react"

export default function Logs() {
   const { logs } = useLogStore()

   return (
      <div>
         <Table>
            <TableCaption>List of your logs</TableCaption>
            <TableHeader>
               <TableRow>
                  <TableHead className="w-[200px] ">
                     <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" /> Date
                     </div>
                  </TableHead>
                  <TableHead className="">
                     <div className="flex items-center">
                        <StickyNote className="h-4 w-4 mr-1" /> Note
                     </div>
                  </TableHead>
                  <TableHead className="w-[200px] text-right">
                     <div className="flex items-center justify-end">
                        <Hourglass className="h-4 w-4 mr-1" /> Hour
                     </div>
                  </TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {Object.keys(logs).map((key) => (
                  <TableRow key={key}>
                     <TableCell className="font-medium">{format(logs[key].date, "PPP")}</TableCell>
                     <TableCell>{logs[key].note}</TableCell>
                     <TableCell className="text-right">{logs[key].hour}</TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </div>
   )
}
