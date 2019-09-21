import React from "react";
import PottyForm from "./components/PottyForm"
import PottiesContainer from "./components/PottiesContainer"

export default function Journal(props) {
    return(
    <div>

        <PottyForm 
            addPotty={props.addPotty}
        />
      <PottiesContainer 
            deletePotty={props.deletePotty}
            updatePotty={props.updatePotty}
            potties={props.potties}
        />
    </div>
    )

}