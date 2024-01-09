import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/header"

const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const top_anime = await response.json()

  return (
    <>
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={top_anime} />
      </section>
    </>
  )
}

export default Page