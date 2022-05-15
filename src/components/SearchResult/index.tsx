import { Dispatch, SetStateAction } from "react";

//components
import { AnimeItem } from "../AnimeItem";
//styles
import * as Style from "./searchResult.styles";
//types 
import AnimeType from "../../Types/animeType";

type animesSearchProps = {
    isFetching: boolean,
    animeList: AnimeType[],
    animeName: string
}
export const SearchResult = ({isFetching, animeList, animeName} : animesSearchProps)=>{
    if(animeName === ""){
        return <div></div>
    }else if(animeName !== "" && isFetching){
        return(
            <Style.Container>
                <Style.Title>
                    Resultados da busca:
                    <Style.TitleMain>{" '" + animeName + "'"}</Style.TitleMain>
                </Style.Title>
                <Style.Loading>Carregando</Style.Loading>
            </Style.Container>
        )
    }else{
        return(
            <Style.Container>
                <Style.Title>
                    Resultados da busca:
                    <Style.TitleMain>{" '" + animeName + "'"}</Style.TitleMain>
                </Style.Title>
                <Style.AnimeContainer>
                    {
                        animeList.map((anime, index) => 
                            <AnimeItem key={index} anime={anime}/>
                        )
                    } 
                </Style.AnimeContainer>
            </Style.Container>
        )
    }
}