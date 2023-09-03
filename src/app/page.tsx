import { Sidebar } from "./sidebar";
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/products')

  return (
    <main className="flex min-h-screen flex-col">
      Index
    </main>
  )
}
