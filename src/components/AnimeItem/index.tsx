import AnimeType from "../../Types/animeType"


// style
import * as Style from "./animeItem.style";
type AnimeItemProps = {
    anime: AnimeType
}
export const AnimeItem = ({anime} : AnimeItemProps)=>{
    return(
        <Style.Container background={anime.images.jpg.image_url}>
            <Style.Gradient></Style.Gradient>
            <Style.Name>{anime.title}</Style.Name>
        </Style.Container>
    )
}