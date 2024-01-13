"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";

const Popular = () => {
  const [page, set_page] = useState(1);
  const [top_anime, set_top_anime] = useState([]);
  const fetch_data = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );
    const data = await response.json();
    set_top_anime(data);
  };

  useEffect(() => {
    fetch_data();
  }, [page]);

  const max_page = top_anime.pagination?.last_visible_page;

  return (
    <>
      <HeaderMenu title={`Anime Terpopuler Page ${page}`} />
      <AnimeList api={top_anime} />
      <Pagination page={page} last_page={max_page} set_page={set_page} />
    </>
  );
};

export default Popular;
