"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const search_ref = useRef()
    const router = useRouter()
    const handle_search = (event) => {
        event.preventDefault()
        const keyword = search_ref.current.value
        router.push(`/search/${keyword}`)
    }
    return (
        <div className="relative">
            <input placeholder="Cari Anime..." className="w-full p-2 rounded" ref={search_ref} onKeyDown={(event) => {
                if (event.key === 'Enter') {
                    handle_search(event);
                }
            }}></input>
            <button className="absolute top-2 end-2" onClick={handle_search}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default InputSearch