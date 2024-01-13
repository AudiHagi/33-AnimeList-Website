import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import { get_anime_response } from "./libs/api-libs";

const Page = async () => {
  const top_anime = await get_anime_response("top/anime", "limit=8");

  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/popular"
        />
        <AnimeList api={top_anime} />
      </section>
    </>
  );
};

export default Page;
