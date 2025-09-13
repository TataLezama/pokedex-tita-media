import { BrowserRouter, RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";

export const PokemonsApp = () => {
  return (
    <BrowserRouter>
        <RouterProvider router= {appRouter} />
    </BrowserRouter>
  )
}
