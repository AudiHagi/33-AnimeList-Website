import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import {
  get_anime_response,
  get_nested_anime_response,
  reproduce_data,
} from "@/libs/api-libs";

const Page = async () => {
  const top_anime = await get_anime_response("top/anime", "limit=8");
  let recommendation_anime = await get_nested_anime_response(
    "recommendations/anime",
    "entry"
  );
  recommendation_anime = reproduce_data(recommendation_anime, 8);

  return (
    <>
      <section>
        <Header
          title="Most Popular"
          linkTitle="Lihat Semua"
          linkHref="/popular"
        />
        <AnimeList api={top_anime} />
      </section>
      <section>
        <Header title="Anime Recommendation" />
        <AnimeList api={recommendation_anime} />
      </section>
    </>
  );
};

export default Page;
