import { create } from "zustand"

export type LogTypes = {
   note: string
   hour: number
   date: Date
}

interface LogState {
   log: LogTypes
   setLog: (log: LogTypes) => void

   logs: { [key: string]: LogTypes }
   setLogs: (log: LogTypes, key: string) => void
}

export const useLogStore = create<LogState>()((set) => ({
   log: { note: "", hour: 0, date: new Date() },
   setLog: (log: LogTypes) => set((state) => ({ log: { ...state.log, ...log } })),

   logs: {},
   setLogs: (log: LogTypes, key: string) => set((state) => ({ logs: { ...state.logs, [key]: log } })),
}))
