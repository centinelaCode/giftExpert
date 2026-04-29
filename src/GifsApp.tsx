import { useState } from "react";

import { mockGifs } from "./mock-data/gifs.mock"
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from './shared/components/CustomHeader';
import { GifList } from "./shared/components/GifList";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
   const [lastSearches, setLastSearches] = useState(['dragon ball z'])

   const handleLastSearchesClicked = ( lastSearch: string ) => {
      console.log( lastSearch )
   }

   const handleSearch = ( query: string ) => {
      console.log({ query })
   }

   return (
      <>
         {/* header */}
         <CustomHeader 
            title="Buscador de Gifs" 
            description="Descubre y comparte el Gif perfecto" 
         />

         {/* Search */}
         <SearchBar 
            placeholder="Busca el Gif que quieras"
            onQuery={ handleSearch }
         />

         {/* Previus Search */}
         <PreviousSearches 
            searches={ lastSearches }
            onLabelClicked={ handleLastSearchesClicked }
         />
         
         {/* Gifs */}
         <GifList gifs={mockGifs} />

      </>
   )
}


