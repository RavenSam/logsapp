"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePicker } from "@/components/DatePicker"
import { useLogStore } from "@/store"
import { useToast } from "@/components/ui/use-toast"
import dayjs from "dayjs"
import { validateLog } from "@/helpers/funcs"
import { PlusIcon } from "lucide-react"
import { useState } from "react"
import { format } from "date-fns"

export default function NewLog() {
   return (
      <div className="flex items-center justify-between">
         <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">Your logs</h2>

         <NewLogDialog />
      </div>
   )
}

export function NewLogDialog() {
   const { toast } = useToast()
   const { log, setLogs, setLog } = useLogStore()
   const [open, setOpen] = useState(false)

   const submitLog = async () => {
      try {
         validateLog(log)

         setLogs(log, dayjs(log.date).format("YYYY-MM-DD"))
         toast({
            title: "Successfully create log",
            description: `${log.hour} hours in ${format(log.date, "PPP")}`,
         })

         setOpen(false)

         setLog({ note: "", hour: 0, date: new Date() })
      } catch (e) {
         toast({
            variant: "destructive",
            title: "Ops! Fail to create log.",
            description: e as string,
         })
      }
   }

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger asChild>
            <Button >
               <PlusIcon className="h-5 w-5 mr-2"/>
               New log
            </Button>
         </DialogTrigger>
         <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
               <DialogTitle>Create Log</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
               <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="date" className="text-right">
                     Date
                  </Label>
                  <DatePicker />
               </div>

               <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="hour" className="text-right">
                     Hour
                  </Label>
                  <Input
                     id="hour"
                     type="number"
                     className="col-span-3"
                     value={log.hour}
                     onChange={(e) => setLog({ ...log, hour: parseInt(e.target.value) })}
                  />
               </div>
               <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="note" className="text-right">
                     Note
                  </Label>
                  <Input
                     id="note"
                     placeholder="note of the log"
                     className="col-span-3"
                     value={log.note}
                     onChange={(e) => setLog({ ...log, note: e.target.value })}
                  />
               </div>
            </div>
            <DialogFooter>
               <Button type="submit" onClick={submitLog}>
                  Save
               </Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   )
}
