import { get_anime_response } from "@/app/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const search_value = decodeURIComponent(keyword).replace(/\b\w/g, (c) =>
    c.toUpperCase()
  );
  const search_anime = await get_anime_response("anime", `q=${keyword}`);

  return (
    <>
      <section>
        <Header title={`Hasil pencarian untuk ${search_value}...`} />
        <AnimeList api={search_anime} />
      </section>
    </>
  );
};

export default Page;
