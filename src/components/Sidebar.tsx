import { HomeIcon, Library, Search } from "lucide-react"

const SideBar = () => {
  return(
    <aside className='w-72 bg-zinc-950 p-6'>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"/>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
        <div className="w-3 h-3 bg-green-500 rounded-full"/>
      </div>

      <nav className="space-y-5 mt-10">
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <HomeIcon/>
          Home
        </a>
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <Search/>
          Search
        </a>
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <Library/>
          Your Library
        </a>

        <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 1</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 2</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 3</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 4</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 5</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 6</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 7</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 8</a>
        </nav>
      </nav>
    </aside>
  )
}



export default SideBar