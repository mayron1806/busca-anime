import { useState } from 'react';
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



function App() {
  const [animeList, setAnimeList] = useState<AnimeType[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [animeName, setAnimeName] = useState<string>("");
 
  return (
    <Style.Container>
      <Header 
        setAnimeList={setAnimeList} 
        setIsFetching={setIsFetching}
        setAnimeName={setAnimeName}
      />
      <Banner/>
      <Style.Main>  
        <SearchResult
          isFetching={isFetching} 
          animeList={animeList}
          animeName={animeName}  
        />
      </Style.Main>
    </Style.Container>
  );
}

export default App;
