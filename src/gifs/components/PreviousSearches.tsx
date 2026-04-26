import type { FC } from "react"

interface Props {
   searches: string[]
   onLabelClicked: (lastSearch: string) => void
}

export const PreviousSearches:FC<Props> = ({ searches, onLabelClicked }) => {
   return (
      <div className="previous-searches">
         <h2>Busquedas Previas</h2>
         <div>
            <ul className="previous-searches-list">
               {
                  searches.map((searchItem) => (
                     <li 
                        key={searchItem}
                        onClick={ () => onLabelClicked(searchItem) }
                     >{searchItem}</li>            
                  ))
               }
            </ul>
         </div>
      </div>
   )
}