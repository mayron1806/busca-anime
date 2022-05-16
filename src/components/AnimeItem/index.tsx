import AnimeType from "../../Types/animeType"


// icon
import button from "../../assets/icons/trailer-button.svg";
// style
import * as Style from "./animeItem.style";
import { FormEvent } from "react";
type AnimeItemProps = {
    anime: AnimeType
}
export const AnimeItem = ({anime} : AnimeItemProps)=>{
    const redirectToTrailer = (e: FormEvent) => {
        e.preventDefault();
        window.open(anime.trailer.url, "_blank");
    }
    return(
        <Style.Container
            href={anime.url} 
            target="_blank" 
            background={anime.images.jpg.image_url}
        >
            <Style.Gradient></Style.Gradient>
            <Style.InfoContent>
                <Style.Info>{anime.title}</Style.Info>
                <Style.Info textColor="var(--blue)">Rank: {anime.rank}</Style.Info>
            </Style.InfoContent>
            {
                anime.trailer.url !== null &&
                <Style.trailerButton onClick={(e)=> redirectToTrailer(e)}>
                    <Style.trailerText>Assistir trailer</Style.trailerText>
                    <Style.trailerIcon src={button}/>
                </Style.trailerButton>
            }
            
        </Style.Container>
    )
}