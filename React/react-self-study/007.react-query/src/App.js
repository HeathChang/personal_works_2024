import './App.css';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import GettingStarted from "./components/getting-started/getting-started";


// Create a client
const queryClient = new QueryClient();

function App() {
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>

                <GettingStarted/>
            </QueryClientProvider>

        </div>
    );
}

export default App;
