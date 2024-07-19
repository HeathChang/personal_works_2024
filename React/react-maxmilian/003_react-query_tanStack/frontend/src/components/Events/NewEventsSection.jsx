import { useQuery } from '@tanstack/react-query';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';

import { fetchEvents } from "../../utils/http.js";

export default function NewEventsSection() {
	// useQuery : send http request and get needed information with errors
	const { isPending, data, isError, error } = useQuery({
		queryKey: ['NewEventsSection'], // cache data that's returned by the request so that the response from that request could be reused
		queryFn: fetchEvents,// actual code that will be executed that will send the actual request
		staleTime: 5000, // caching: after which time react-query will send such a behind the scenes request to get updated data.
		gcTime: 300000 // how long the cached data will be kept around
	});
	let content;

	if (isPending) {
		content = <LoadingIndicator/>;
	}

	if (isError) {
		content = (
			<ErrorBlock title="An error occurred" message={ error.info?.message || 'failed to fetch event' }/>
		);
	}

	if (data) {
		content = (
			<ul className="events-list">
				{ data.map((event) => (
					<li key={ event.id }>
						<EventItem event={ event }/>
					</li>
				)) }
			</ul>
		);
	}

	return (
		<section className="content-section" id="new-events-section">
			<header>
				<h2>Recently added events</h2>
			</header>
			{ content }
		</section>
	);
}
