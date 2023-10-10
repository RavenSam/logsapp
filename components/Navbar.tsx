import { Droplet, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function Navbar() {
   return (
      <div className="flex items-center justify-between p-4 md:px-8">
         <h1 className="flex items-center font-bold tracking-widest">
            <Droplet className="h-5 w-5 mr-1" />
            Time
         </h1>

         <Button variant={"ghost"} size="icon">
            <LogOut className="h-5 w-5"/>
         </Button>
      </div>
   )
}
