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
// TanStack은 전역상태 라이브러리로도 사용할 수 있기 때문에 아래와 같이 Provider로 감싸줘야 한다
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
