import { useState } from "react"
import useServices from "../../Hooks/useServices"

const SelectService = () => {
  
  const [services] = useServices()

  const [selectedService, setSelectedService] = useState("")

  const selectHandler = (e) => {
    setSelectedService(e.target.value)
  }

  return (
    <>
      <select name="" id="" onChange={selectHandler}>
        <option value="">Selecciona un servicio</option>
        {
          services.map(service => {
            return (
              <option key={service.id} value={service.id}>{service.name}</option>
            )
          })
        }
      </select>

      <div>{selectedService}</div>
    </>
  )
}

export default SelectService