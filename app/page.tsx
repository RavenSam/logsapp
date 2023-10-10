import Calendar from "@/components/Calendar"
import Logs from "@/components/Logs"
import NewLog from "@/components/NewLog"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function HomePage() {
  

   return (
      <div className="max-w-5xl mx-auto space-y-8 mt-10 p-4">
         <Calendar />

         <hr />

         <NewLog />
         <Logs />
      </div>
   )
}
