import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { Layout } from "./components/Layout/Layout";
import { toast, Toaster } from "sonner";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: () => toast.error("Something went wrong. Please try again."),
  }),
  defaultOptions: {
    queries: { retry: 0, staleTime: 86_400_000 }, // Becomes stale after a day
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Layout />
    </QueryClientProvider>
  );
}

export default App;
