import Animes from "../../services/AnimesAPI"
// style
import * as Style from "./banner.styles";

// icons
import trailer from "../../assets/icons/trailer.svg";
import { useEffect, useState } from "react";
import AnimeType from "../../Types/animeType";

export const Banner = ()=>{
    const [anime, setAnime] = useState<AnimeType>({} as AnimeType);

    useEffect(()=>{
        const getRandomAnime = async ()=>{
            await Animes.getRandomAnime()
            .then((res)=>{ setAnime(res)})
            .catch((err)=>{console.log(err)})
        }
        getRandomAnime();
    }, [])
    if(Object.values(anime).length > 0){
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
    }else{
        return(
            <Style.Container>
                
            </Style.Container>
        )
    }
   
    
   
}