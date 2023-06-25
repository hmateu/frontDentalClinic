import React, { useState } from "react";
import "./Treatments.css"
import { Card } from "../../common/Card/Card";
import { bringAllTreatments } from "../../utils/apiCalls/treatmentsCalls/treatmentsGetAll";
export const Treatments = () => {
    const [treatments, setTreatments] = useState([]);
    if (treatments.length === 0) {
        bringAllTreatments()
            .then(treatments => setTreatments(treatments.data.data))
            .catch(error => console.log(error))
    }
    return (
        <div className="treatmentsStyle">
            <div className="titleForm">
                SERVICIOS
            </div>
            {
                treatments.length > 0
                    ? (
                        <div className="allTreatments">
                            {
                                treatments.map(treatment => {
                                    return (
                                        <div key={treatment.id}>
                                            <Card
                                                name={`${treatment.name}`}
                                                price={`Precio: ${treatment.price}€`}
                                            />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    )
                    : (<div>CARGANDO ...</div>)
            }
        </div>
    );
}