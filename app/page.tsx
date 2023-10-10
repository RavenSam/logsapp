import Calendar from "@/components/Calendar"
import Logs from "@/components/Logs"
import NewLog from "@/components/NewLog"

export default function Home() {
   return (
      <div className="max-w-5xl mx-auto space-y-8 mt-10 p-4">
         <Calendar />

         <hr />

         <NewLog />
         <Logs />
      </div>
   )
}
