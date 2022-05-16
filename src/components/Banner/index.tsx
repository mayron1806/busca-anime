// meus hooks
import useRandomAnime from "../../Hooks/useRandomAnime";
// style
import * as Style from "./banner.styles";

// icons
import trailer from "../../assets/icons/trailer.svg";

export const Banner = ()=>{
    // pega um anime aleatorio
    const {anime} = useRandomAnime();
    return(
        <Style.Container>
            <Style.Info>
                <Style.Title>{anime?.title}</Style.Title>
                <Style.Synopsis>{anime?.synopsis}</Style.Synopsis>
                <Style.Buttons>
                    {
                        anime?.url !== null &&
                        <Style.OutlineButton href={anime?.url} target="_blank" rel="noreferrer">
                            MyAnimeList
                        </Style.OutlineButton>
                    }
                    {
                        anime?.trailer.url !== null &&
                        <Style.FilledButton href={anime?.trailer.url} target="_blank" rel="noreferrer">
                            <Style.TrailerIcon src={trailer}/>
                            Trailer
                        </Style.FilledButton> 
                    }
                </Style.Buttons>
            </Style.Info>
            <Style.ImageContainer>
                <Style.Image src={anime?.images.jpg.image_url} alt="Anime image" />
            </Style.ImageContainer>
        </Style.Container>
    )
}