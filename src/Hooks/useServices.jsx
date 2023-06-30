import { useEffect, useState } from "react"
import { bringAllServices } from "../utils/apiCalls/servicesCalls/servicesGetAll"

const useServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        bringAllServices()
        .then(res => setServices(res.data.data))
        .catch(error => console.log(error))
    }, [])

    return [services, setServices]
}

export default useServices