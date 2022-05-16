import { Dispatch, FormEvent, SetStateAction, useContext, useRef } from "react";
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
import { AnimeSearch } from "../../context/animeSearch";
type headerProps = {
    setIsFetching: Dispatch<SetStateAction<boolean>>
    setAnimeList: Dispatch<SetStateAction<AnimeType[]>>
}

export const Header = ({setIsFetching, setAnimeList} : headerProps) =>{
    // reference
    const animeInputRef = useRef<HTMLInputElement | null>(null);
    //context
    const animeSearch = useContext(AnimeSearch);

    const searchAnime = (e: FormEvent) => {
        e.preventDefault();
        if(animeInputRef.current && animeInputRef.current.value.length >= 1){
            setIsFetching(true);
            animeSearch.setAnimeName(animeInputRef.current.value);
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
            <Style.Title>Animes Legion</Style.Title>
            <Style.FormSearch onSubmit={(e)=> {searchAnime(e)}}>
                <Style.Input ref={animeInputRef} type='text' placeholder="Ex: Naruto"/>
                <Style.Image src={search}/>
            </Style.FormSearch>
            <Style.SocialMedia>
                <a href="https://www.linkedin.com/in/mayron-fernandes/" target="_blank" rel="noreferrer">
                    <Style.LinkIcon src={linkedin} alt="linkedin-logo" />
                </a>
                <a href="https://github.com/mayron1806" target="_blank" rel="noreferrer">
                    <Style.LinkIcon src={github} alt="linkedin-logo" />
                </a>
            </Style.SocialMedia>
        </Style.Container>
    )
}