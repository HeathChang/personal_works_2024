import { useRef, useState } from 'react';
import { fetchEvents } from "../../utils/http.js";
import { useQuery } from "@tanstack/react-query";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";

export default function FindEventSection() {
	const searchElement = useRef();
	const [searchTerm, setSearchTerm] = useState();
	const { data, isPending, isError, error } = useQuery({
		queryKey: ['NewEventsSection', { search: searchTerm }], // queryKey 을 다중으로 설정할 경우, react-query 는 첫번째 query 에서 받은 결과를 두번째 query 에서 사용하도록 caching 함
		queryFn: () => fetchEvents(searchTerm)
	});

	function handleSubmit(event) {
		event.preventDefault();
		setSearchTerm(searchElement?.current?.value);
	}

	let content = <p>Enter Search Term</p>;
	if (isPending) content = <LoadingIndicator/>;
	else if (isError) content = <ErrorBlock title="Error occured" message={error?.info?.message || 'FAILED TO FETCH'}/>;
	else if (data) content = <ul className="events-list">{data.map((event) => <li key={event?.id}><EventItem event={event}/></li>)}</ul>


	return (
		<section className="content-section" id="all-events-section">
			<header>
				<h2>Find your next event!</h2>
				<form onSubmit={ handleSubmit } id="search-form">
					<input
						type="search"
						placeholder="Search events"
						ref={ searchElement }
					/>
					<button>Search</button>
				</form>
			</header>
			{content}
		</section>
	);
}
