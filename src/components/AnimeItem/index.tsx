import AnimeType from "../../Types/animeType"


// icon
import button from "../../assets/icons/trailer-button.svg";
// style
import * as Style from "./animeItem.style";
type AnimeItemProps = {
    anime: AnimeType
}
export const AnimeItem = ({anime} : AnimeItemProps)=>{
    return(
        <Style.Container href={anime.url} target="_blank" background={anime.images.jpg.image_url}>
            <Style.Gradient></Style.Gradient>
            <Style.InfoContent>
                <Style.Info>{anime.title}</Style.Info>
                <Style.Info textColor="var(--blue)">Rank: {anime.rank}</Style.Info>
            </Style.InfoContent>
            {
                anime.trailer.url !== null &&
                <Style.trailerButton href={anime.trailer.url} target="_blank">
                    <Style.trailerText>Assistir trailer</Style.trailerText>
                    <Style.trailerIcon src={button}/>
                </Style.trailerButton>
            }
            
        </Style.Container>
    )
}