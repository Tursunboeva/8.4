import { BrowserRouter } from 'react-router'; 
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProductContext } from './context/Context.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 10,
      // @ts-ignore
      cacheTime: 1000 * 60 * 5,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ProductContext>
        <App />
      </ProductContext>
    </QueryClientProvider>
  </BrowserRouter>
);
