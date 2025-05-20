import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
// {
//   defaultOptions: {
//     queries: {
//       retry: 3, /* Ile razy próbować ponownie */
//       cacheTime: 300_000, /* Czas przechowywania danych w pamięci podręcznej */
//       staleTime: 10 * 1000, /* Czas po którym dane są uznawane za nieaktualne */
//       refetchOnWindowFocus:
//         true /* Kiedy pobierać swieże dane? np. tak jak tu - kiedy zmienimy na inną kartę i wrócimy */,
//       refetchOnReconnect: false /* Lub połaczymy się znów */,
//       refetchOnMount: false /* Lub po odświeżeniu */,
//       refetchInterval: 0 /* Co ile odświeżać */,
//       refetchIntervalInBackground: false /* Czy odświeżać w tle */,
//       // enabled: false, /* Czy zapytanie ma być aktywne */
//       // select: (data) => data, /* Możemy zmienić dane przed ich zwróceniem */
//       // onSuccess: (data) => {}, /* Co zrobić po sukcesie */
//       // onError: (error) => {}, /* Co zrobić po błędzie */
//       // onSettled: (data, error) => {}, /* Co zrobić po zakończeniu zapytania */
//       // onFocus: () => {}, /* Co zrobić po powrocie na stronę */
//       // onReconnect: () => {}, /* Co zrobić po ponownym połączeniu */
//       // onMount: () => {}, /* Co zrobić po zamontowaniu komponentu */
//       // onUnMount: () => {}, /* Co zrobić po odmontowaniu komponentu */
//       // onSuccess: (data) => {
//       //   console.log(data);
//       // }, /* Co zrobić po sukcesie */
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
