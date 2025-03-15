import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import React from 'react';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/*
const defaultQueryFn = async ({ queryKey }) => {
	const { data } = await axios.get(
	  `http://localhost:8800/api/auth/me`,
	)
	return data
  }
  
  
  
  
  
  const queryClient = new QueryClient({
	defaultOptions: {
	  queries: {
		queryFn: defaultQueryFn,
		refetchOnWindowFocus: false,
	  },
	},
  })
 */
    const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

  
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>
);
