import { BrowserRouter, RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";

export const PokemonsApp = () => {
  return (
    <>
        <BrowserRouter basename="/pokedex-tita-media">
            <RouterProvider router= {appRouter} />
        </BrowserRouter>
    </>
  )
}
