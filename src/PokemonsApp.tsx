import { HashRouter, Route } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { PokemonPage } from "./pages/pokemon/PokemonPage";
import { FavoritesPage } from "./pages/favorites/FavoritesPage";

export const PokemonsApp = () => {
  return (
    <>
        <HashRouter>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:id" element={<PokemonPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </HashRouter>
    </>
  )
}
