import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import "./index.css";
import "./App.css";
import AuthProvider from "./Provider/AuthProvider";
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient()


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
