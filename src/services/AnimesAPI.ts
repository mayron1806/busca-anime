import axios from "axios";

import animeType from "../Types/animeType";

type AnimeList = {
    data: animeType[]
}

const AnimeAPI = axios.create({
    baseURL: "https://api.jikan.moe/v4/"
})

// pega o anime pelo nome digitado no input
const getAnimesByName = async (name: string | undefined) => {
    let list : AnimeList = {} as AnimeList;
    await AnimeAPI.get(`anime?q=${name ?? ""}`)
    .then(res => list.data = res.data.data);
    return list.data;
}
// pega um anime aleatorio
const getRandomAnime = async () => {
    let anime : animeType = {} as animeType;
    await AnimeAPI.get(`random/anime`)
    .then(res => anime = res.data.data);
    return anime;
}

const Animes = {
    getAnimesByName,
    getRandomAnime
}
export default Animes;
