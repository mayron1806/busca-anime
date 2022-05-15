import { createContext, Dispatch, SetStateAction } from "react";
type animeSearchType = {
    animeName: string,
    setAnimeName: Dispatch<React.SetStateAction<string>>
}
export const AnimeSearch = createContext<animeSearchType>({} as animeSearchType);