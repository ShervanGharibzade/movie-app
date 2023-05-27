"use client";

import { useState } from "react"
import Link from "next/link";

export default function Nav() {
  const [name, setName] = useState('');
  
  const searchChange = async(e) =>{
    const movieName = e.target.value
    if(movieName !==""){
      setName(movieName)
    }
  }
  
  
  return (
    <nav className="fixed top-3 bg-zinc-900 rounded-full z-30 mx-auto left-1/2 -translate-x-2/4 w-fit px-6 py-3 bg-normal items-center">
      <div className="flex gap-5">
          <h2 className="flex-1 font-bold text-white text-2xl">Movie App</h2>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 items-center">
              <input
              onChange={searchChange}
              type="text"
              className="bg-zinc-600 text-white px-3 py-2 rounded-xl outline-none"
              placeholder="Search movie..."
              />
                { name 
                ? <Link href={`/search/${name}`}>
                  <button 
                  className="bg-blue-600 text-white w-10 h-10 rounded-full hover:bg-blue-700 hover:ring-2 ring-blue-400 duration-200"
                  type="submit"
              >
                  Go
                  </button>
                </Link>
                : "Go"
              }
          </form>
        </div>
    </nav>
  )
}
