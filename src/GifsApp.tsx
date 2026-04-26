import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from './shared/components/CustomHeader';
import { GifList } from "./shared/components/GifList";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
   return (
      <>
         {/* header */}
         <CustomHeader 
            title="Buscador de Gifs" 
            description="Descubre y comparte el Gif perfecto" 
         />

         {/* Search */}
         <SearchBar placeholder="Busca el Gif que quieras"/>

         {/* Previus Search */}
         <PreviousSearches searches={['Goku', 'Friezzer', 'Majin Boo']}/>
         
         {/* Gifs */}
         <GifList gifs={mockGifs} />

      </>
   )
}


