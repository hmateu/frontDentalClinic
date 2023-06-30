import { useState } from "react"
import useServices from "../../Hooks/useServices"

const SelectService = () => {
  
  const [services] = useServices()

  const [selectedOption, setSelectedOption] = useState("")

  const selectHandler = (e) => {
    setSelectedOption(e.target.value)
  }

  return (
    <>
      <select name="" id="" onChange={selectHandler}>
        <option value="">Selección de servicios</option>
        {
          services.map(service => {
            return (
              <option key={service.id} value={service.id}>{service.name}</option>
            )
          })
        }
      </select>

      <div>
      <img src={selectedOption} alt="" /> 
        </div>   
    </>
  )
}

export default SelectService