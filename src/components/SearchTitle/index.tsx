import { useContext } from "react";
import { AnimeSearch } from "../../context/animeSearch";
import * as Style from "./searchTitle.styles";


export const SearchTitle = () => {
    const animeNameContext = useContext(AnimeSearch);
    return(
        <Style.Container>
            Resultados da busca:
            <Style.Title>{" '" + animeNameContext.animeName + "'"}</Style.Title>
        </Style.Container>
    );
}