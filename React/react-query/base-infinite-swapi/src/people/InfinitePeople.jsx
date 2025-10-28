import InfiniteScroll from "react-infinite-scroller";
import { Person } from "./Person";
import { useInfiniteQuery } from "@tanstack/react-query";

const initialUrl = "https://swapi.py4e.com/api/people/";
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfinitePeople() {
  const { data, fetchNextPage, hasNextPage, isFetching, isLoading } = useInfiniteQuery({
    queryKey: ['sw-people'],
    queryFn: ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    getNextPageParam: (lastPage) => { return lastPage.next || undefined },
  })
  if (isFetching) return <div>Loading...</div>;

  return (
    <>
      {isFetching && <div>Loading...</div>}
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage} initialLoad={false}>
        {data?.pages?.map(pageData => pageData.results.map(person => <Person key={person.name} name={person.name} hairColor={person.hair_color} eyeColor={person.eye_color} />))}
      </InfiniteScroll>
    </>
  );
}
