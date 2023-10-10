"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Github, Loader2 } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function AuthPage() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [loading, setLoading] = useState(false)
   const supabase = createClientComponentClient()
   const router = useRouter()

   const handleSignWithGithub = async () => {
      setLoading(true)
      try {
         await supabase.auth.signInWithOAuth({
            provider: "github",
            options: { skipBrowserRedirect: true },
         })

         setLoading(false)
         // router.push("/")
      } catch (e) {
         setLoading(false)
         console.log(e)
      }
   }

   // const handleSignUp = async () => {
   //    await supabase.auth.signUp({
   //       email,
   //       password,
   //       options: {
   //          emailRedirectTo: `${location.origin}/auth/callback`,
   //       },
   //    })
   //    router.refresh()
   // }

   // const handleSignIn = async () => {
   //    await supabase.auth.signInWithPassword({
   //       email,
   //       password,
   //    })
   //    router.refresh()
   // }

   return (
      <div className="max-w-6xl mx-auto p-4">
         <div className="grid grid-cols-2 gap-8">
            <div className="rounded-xl w-full h-full relative overflow-hidden">
               <Image src="/img.jpg" layout="fill" alt="Sign up" objectFit="cover" objectPosition="center" />

               <div className="absolute rounded-2xl bottom-4 left-4 right-4 p-4 bg-white/20 text-white backdrop-blur shadow">
                  <p className="drop-shadow-xl">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dignissimos animi quasi non sit.
                     Commodi error animi quam maxime quis.
                  </p>
               </div>
            </div>

            <div className="space-y-6 max-w-lg mx-auto w-full min-h-[85vh] flex flex-col justify-center">
               <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                  Sign up
               </h2>

               <div className="flex items-center gap-4">
                  <Button
                     disabled={loading}
                     onClick={handleSignWithGithub}
                     variant={"outline"}
                     className="rounded-3xl flex-1"
                     size={"lg"}
                  >
                     {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Github className="h-5 w-5 mr-2" />}
                     Github
                  </Button>
                  <Button variant={"outline"} className="rounded-3xl flex-1" size={"lg"} disabled>
                     <div className="h-5 w-5 mr-2">
                        <GoogleSVG />
                     </div>
                     Google
                  </Button>
               </div>

               <div className="flex items-center">
                  <hr className="flex-1" />
                  <p className="p-4 text-sm font-bold opacity-50">OR</p>
                  <hr className="flex-1" />
               </div>

               <form>
                  <fieldset className="space-y-8 " disabled>
                     <div className="grid w-full max-w-lg items-center gap-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input
                           onChange={(e) => setEmail(e.target.value)}
                           value={email}
                           type="email"
                           id="email"
                           placeholder="Email"
                        />
                     </div>

                     <div className="grid w-full max-w-lg items-center gap-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input
                           onChange={(e) => setPassword(e.target.value)}
                           value={password}
                           type="password"
                           id="password"
                           placeholder="********"
                        />
                     </div>

                     <Button type="submit" className="w-full">
                        Sign up
                     </Button>
                  </fieldset>
               </form>
            </div>
         </div>
      </div>
   )
}

const GoogleSVG = () => (
   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
      <path d="M 26 2 C 13.308594 2 3 12.308594 3 25 C 3 37.691406 13.308594 48 26 48 C 35.917969 48 41.972656 43.4375 45.125 37.78125 C 48.277344 32.125 48.675781 25.480469 47.71875 20.9375 L 47.53125 20.15625 L 46.75 20.15625 L 26 20.125 L 25 20.125 L 25 30.53125 L 36.4375 30.53125 C 34.710938 34.53125 31.195313 37.28125 26 37.28125 C 19.210938 37.28125 13.71875 31.789063 13.71875 25 C 13.71875 18.210938 19.210938 12.71875 26 12.71875 C 29.050781 12.71875 31.820313 13.847656 33.96875 15.6875 L 34.6875 16.28125 L 41.53125 9.4375 L 42.25 8.6875 L 41.5 8 C 37.414063 4.277344 31.960938 2 26 2 Z M 26 4 C 31.074219 4 35.652344 5.855469 39.28125 8.84375 L 34.46875 13.65625 C 32.089844 11.878906 29.199219 10.71875 26 10.71875 C 18.128906 10.71875 11.71875 17.128906 11.71875 25 C 11.71875 32.871094 18.128906 39.28125 26 39.28125 C 32.550781 39.28125 37.261719 35.265625 38.9375 29.8125 L 39.34375 28.53125 L 27 28.53125 L 27 22.125 L 45.84375 22.15625 C 46.507813 26.191406 46.066406 31.984375 43.375 36.8125 C 40.515625 41.9375 35.320313 46 26 46 C 14.386719 46 5 36.609375 5 25 C 5 13.390625 14.386719 4 26 4 Z"></path>
   </svg>
)
