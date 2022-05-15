import {useEffect, useState } from "react";
import Animes from "../services/AnimesAPI";
import AnimeType from "../Types/animeType";

const useRandomAnime = () =>{
    const [anime, setAnime] = useState<AnimeType>();
    useEffect(()=>{
        const getRandomAnime = async ()=>{
            await Animes.getRandomAnime()
            .then((res)=>{ setAnime(res)})
            .catch((err)=>{console.log(err)})
        }
        return ()=>{
            getRandomAnime();
        }
    }, [])
    return {anime};
}
export default useRandomAnime;