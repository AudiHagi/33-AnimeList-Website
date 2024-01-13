import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const search_value = decodeURIComponent(keyword).replace(/\b\w/g, (c) =>
    c.toUpperCase()
  );
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const search_anime = await response.json();

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
