// meus hooks
import useRandomAnime from "../../Hooks/useRandomAnime";
// style
import * as Style from "./banner.styles";

// icons
import trailer from "../../assets/icons/trailer.svg";

export const Banner = ()=>{
    // pega um anime aleatorio
    const {anime} = useRandomAnime();
    console.log(anime);
    return(
        <Style.Container>
            <Style.Info>
                <Style.Title>{anime?.title}</Style.Title>
                <Style.Synopsis>{anime?.synopsis}</Style.Synopsis>
                <Style.Buttons>
                    {
                        anime?.url !== null &&
                        <Style.OutlineButton href={anime?.url} target="_blank">
                            MyAnimeList
                        </Style.OutlineButton>
                    }
                    {
                        anime?.trailer.url !== null &&
                        <Style.FilledButton href={anime?.trailer.url} target="_blank">
                            <Style.TrailerIcon src={trailer}/>
                            Trailer
                        </Style.FilledButton> 
                    }
                </Style.Buttons>
            </Style.Info>
            <Style.Image>
                <Style.bg src={anime?.images.jpg.image_url} alt="Anime image" />
            </Style.Image>
        </Style.Container>
    )
}