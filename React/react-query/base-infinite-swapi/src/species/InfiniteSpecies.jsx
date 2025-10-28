import InfiniteScroll from "react-infinite-scroller";
import { Species } from "./Species";
import { useInfiniteQuery } from "@tanstack/react-query";

const initialUrl = "https://swapi.dev/api/species/";
const fetchUrl = async (url) => {
  console.log('url:: ', url);
  const response = await fetch(url);
  return response.json();
};




export function InfiniteSpecies() {
  const { data, fetchNextPage, hasNextPage, isFetching, isLoading } = useInfiniteQuery({
    queryKey: ['sw-species'],
    queryFn: ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    getNextPageParam: (lastPage) => { return lastPage.next || undefined },
  })
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {isFetching && <div>Loading...</div>}
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage} initialLoad={false}>
        {data?.pages?.map(pageData => pageData.results.map(species => <Species key={species.name} name={species.name} language={species.language} averageLifespan={species.average_lifespan} />))}
      </InfiniteScroll>
    </>
  );
  return <InfiniteScroll />;
}
