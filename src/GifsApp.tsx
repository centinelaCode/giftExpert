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
      query = query.toLowerCase().trim()

      //! Validamos que el query no este vacio
      if( query.length === 0 ) return

      //! convertimos a minusculas y quitamos espacios en blancos
      // const clearQuery: string = query.replace(/\s+/g, " ");
      
      //! verificamos que ya existe ese termino de busqueda no haga nada
      if (lastSearches.includes(query)) return
      
      console.log(query)
      
      //! si no existe lo agregamos al inicio del arreglo limitandolo a 8 elementos
      // const currentTerms = lastSearches.slice(0,6)
      // currentTerms.unshift(query)
      // setLastSearches(currentTerms)

      setLastSearches( [query, ...lastSearches].splice(0,8) )

      // console.log(currentTerms)



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


