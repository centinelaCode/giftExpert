import type { FC } from "react"

interface Props {
   searches: string[]
}

export const PreviousSearches:FC<Props> = ({ searches }) => {
   return (
      <div className="previous-searches">
         <h2>Busquedas Previas</h2>
         <div>
            <ul className="previous-searches-list">
               {
                  searches.map((searchItem) => (
                     <li key={searchItem}>{searchItem}</li>            
                  ))
               }
            </ul>
         </div>
      </div>
   )
}