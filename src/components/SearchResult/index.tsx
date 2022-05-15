import { useContext } from "react";

//components
import { AnimeItem } from "../AnimeItem";
//styles
import * as Style from "./searchResult.styles";
//types 
import AnimeType from "../../Types/animeType";
import { SearchTitle } from "../SearchTitle";
import { AnimeSearch } from "../../context/animeSearch";

type animesSearchProps = {
    isFetching: boolean,
    animeList: AnimeType[]
}
export const SearchResult = ({isFetching, animeList} : animesSearchProps)=>{
    const animeNameContext = useContext(AnimeSearch);
    
    if(animeNameContext.animeName === ""){
        return <div></div>
    }else if(animeNameContext.animeName !== "" && isFetching){
        return(
            <Style.Container>
                <SearchTitle/>
                <Style.Loading>Carregando</Style.Loading>
            </Style.Container>
        )
    }else if(animeNameContext.animeName !== "" && !isFetching && animeList.length < 1){
        return(
            <Style.Container>
               <SearchTitle/>
            </Style.Container>
        )
    }else{
        return(
            <Style.Container>
               <SearchTitle/>
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