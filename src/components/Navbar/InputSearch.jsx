"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const search_ref = useRef();
  const router = useRouter();
  const handle_search = (event) => {
    const keyword = search_ref.current.value;
    if (!keyword || keyword.trim() == "") return;
    if (event.key === "Enter" || event.type == "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Cari Anime..."
        className="w-full p-2 rounded"
        ref={search_ref}
        onKeyDown={handle_search}
      ></input>
      <button className="absolute top-2 end-2" onClick={handle_search}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
