import { Dispatch, FormEvent, SetStateAction } from "react";
import { useRef } from 'react';
//style
import * as Style from "./header.styles";
// services
import Animes from "../../services/AnimesAPI";
// images
import linkedin from "../../assets/icons/logo-linkedin.svg";
import github from "../../assets/icons/logo-github.svg";
import search from "../../assets/icons/search.svg";

//types
import AnimeType from "../../Types/animeType";
type headerProps = {
    setIsFetching: Dispatch<SetStateAction<boolean>>
    setAnimeList: Dispatch<SetStateAction<AnimeType[]>>
    setAnimeName: Dispatch<SetStateAction<string>>
}

export const Header = ({setIsFetching, setAnimeList, setAnimeName} : headerProps) =>{
    const animeInputRef = useRef<HTMLInputElement | null>(null);

    const searchAnime = (e: FormEvent) => {
        e.preventDefault();
        if(animeInputRef.current && animeInputRef.current.value.length >= 1){
            setIsFetching(true);
            setAnimeName(animeInputRef.current.value);
            const getAnimes = async() => {
                await Animes.getAnimesByName(animeInputRef.current?.value)
                .then((result)=>{ setAnimeList(result) })
                .catch((error)=>{console.log(error)})
                .finally(()=>setIsFetching(false));
            }
            getAnimes();
        }
    }
    return(
        <Style.Container>
            <Style.Title>SUPER ANIMES</Style.Title>
            <Style.FormSearch onSubmit={(e)=> {searchAnime(e)}}>
                <Style.Input ref={animeInputRef} type='text' placeholder="Ex: Naruto"/>
                <Style.Image src={search}/>
            </Style.FormSearch>
            <Style.SocialMedia>
                <a href="https://www.linkedin.com/in/mayron-fernandes/" target="_blank">
                    <Style.LinkIcon src={linkedin} alt="linkedin-logo" />
                </a>
                <a href="https://github.com/mayron1806" target="_blank">
                    <Style.LinkIcon src={github} alt="linkedin-logo" />
                </a>
            </Style.SocialMedia>
        </Style.Container>
    )
}