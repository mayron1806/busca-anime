import { useContext, useState } from 'react';
// style
import './style/Global.css';
import * as Style from "./app.styles";
// components
import { AnimeItem } from './components/AnimeItem';
import { Header } from './components/Header';
import { Banner } from './components/Banner';

// types
import AnimeType from './Types/animeType';
import { SearchResult } from './components/SearchResult';
import { AnimeSearch } from './context/animeSearch';



function App() {
  const [animeList, setAnimeList] = useState<AnimeType[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [animeName, setAnimeName] = useState<string>("");

  return (
    <AnimeSearch.Provider 
      value={{animeName, setAnimeName}}
    >
      <Style.Container>
        <Header 
          setAnimeList={setAnimeList} 
          setIsFetching={setIsFetching}
        />
        <Banner/>
        <Style.Main>  
          <SearchResult
            isFetching={isFetching} 
            animeList={animeList}
          />
        </Style.Main>
      </Style.Container>
    </AnimeSearch.Provider>
  );
}

export default App;
