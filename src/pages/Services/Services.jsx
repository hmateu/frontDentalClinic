import React, { useState } from "react";
import "./Services.css"
import { Card } from "../../common/Card/Card";
import { bringAllServices } from "../../utils/apiCalls/servicesCalls/servicesGetAll";
export const Services = () => {
    const [services, setTreatments] = useState([]);
    if (services.length === 0) {
        bringAllServices()
            .then(services => setTreatments(services.data.data))
            .catch(error => console.log(error))
    }
    return (
        <div className="servicesStyle">
            <div className="titleForm">
                SERVICIOS
            </div>
            {
                services.length > 0
                    ? (
                        <div className="allServices">
                            {
                                services.map(service => {
                                    return (
                                        <div key={service.id}>
                                            <Card
                                                name={`${service.name}`}
                                                price={`Precio: ${service.price}€`}
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