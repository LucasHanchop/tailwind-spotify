import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react"
import Image from "next/image"

const Footer = () => {
    return(
        <footer className='bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between'>
        
            <div className="flex items-center gap-3">
                <Image src="/7DavidGuetta.jpg" className="w-full" width={56} height={56} alt="Album 7 DavidGuetta"/>
                <div className="flex flex-col">
                    <strong className="font-normal">Overtone</strong>
                    <span className="text-xs text-zinc-400">Jack Back</span>
                </div>
            </div>

            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-6">
                    <Shuffle  size={20} className="text-zinc-200"/>
                    
                    <SkipBack  size={20} className="text-zinc-200"/>

                    <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
                    <Play />
                    </button>
                    
                    <SkipForward  size={20} className="text-zinc-200"/>

                    <Repeat  size={20} className="text-zinc-200"/>

                </div>

                <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-500"> 0:31</span>
                    <div className="h-1 rounded-full w-80 bg-zinc-600">
                    <div className=" rounded-full bg-zinc-200 w-14 h-1"> </div>
                    </div>
                    <span className="text-xs text-zinc-500"> 3:42</span>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Mic2 size={20} />
                <LayoutList size={20} />
                <Laptop2 size={20} />

                <div className="flex items-center gap-4">
                    <Volume size={20} />
                    <div className="h-1 rounded-full w-24 bg-zinc-600">
                    <div className=" rounded-full bg-zinc-200 w-16 h-1"> </div>
                    </div>
                </div>
                <Maximize2 size={20} />
            </div>

      </footer>
    )
}


export default Footer