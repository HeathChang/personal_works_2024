# What is Tanstack Query ?
- A library that helps with sending HTTP requests & keeping FE UI "in sync"

----------------
# 왜 사용될까?
> 주로 redux 와 같은 flux pattern 보단 recoil 과 같은 atomic pattern 에서 사용되는 이유 ?
## Atomic Pattern
- atomic pattern 은 기본적은 state를 atom 이라는 작은 단위로 나누어 독립적으로 관리하지만, 서버에서 넘겨져 온 데이터와의 상호작용을 효율적으로 처리하는 데에는 한계가 있음. 
- 이 경우, react-query를 사용해 server 상태를 관리하고 비동기 데이터를 처리하여 client 상태와 server 상태를 통합적으로 관리
## Flux Pattern 
- 중앙에서 상태를 관리하고, 비동기 로직을 미들웨어를 통해 처리하기에, react-query 의 추가적인 기능이 필요없음.
- Redux는 비동기 작업을 위한 미들웨어와 상태 관리 패턴을 제공하므로, React Query를 사용하는 대신 기존의 미들웨어를 통해 비동기 작업과 상태 관리를 처리하는 경향이 있습니다.

----------------
# userQuery({queryKey, queryFn})

## queryKey 
- queryKey는 쿼리의 고유 식별자 역할을 하며, 이 식별자를 통해 React Query는 데이터의 캐싱과 무효화를 관리

### caching
- queryKey 을 다중으로 설정할 경우, react-query 는 첫번째 query 에서 받은 결과를 두번째 query 에서 사용하도록 caching 함


```
const searchTerm = 'example';
const page = 1;
const filters = { category: 'news' };

const { data, error } = useQuery(
    ['NewEventsSection', { search: searchTerm, page, filters }],
    () => fetchEvents({ search: searchTerm, page, filters })
);
```
- 이 예시에서는 queryKey에 'NewEventsSection'과 검색어, 페이지 번호, 필터 조건을 포함한 객체를 사용하여 쿼리를 식별합니다. 이를 통해 React Query는 각기 다른 검색어, 페이지 번호, 필터 조건에 대해 별도의 캐시를 유지하고, 필요할 때만 데이터를 다시 패칭하게 됩니다.


## queryFn
- React Query에서 queryFn을 설정하는 방법에는 두 가지 방식인 의 차이점은 함수 호출 시점과 방식에 있습니다.
1. queryFn: fetchEvents > 함수 참조를 직접 전달하여 React Query가 호출
2. queryFn: () => fetchEvents(searchTerm) > 익명 함수를 사용하여 fetchEvents 호출을 명시적