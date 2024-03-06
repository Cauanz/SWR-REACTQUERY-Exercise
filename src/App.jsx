import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchNames from "./components/SearchNames";

function App() {

  const queryClient = new QueryClient();

  return (
      <QueryClientProvider client={queryClient}>
        <SearchNames />
      </QueryClientProvider>
  )
}

//TODO - Deixar isso de copiar do Phind, e ir aprender esse negócio direito

export default App
