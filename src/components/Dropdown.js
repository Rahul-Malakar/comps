import { useEffect, useState } from "react"
import { GoChevronDown } from "react-icons/go";
import Panel from './Panel'

function Dropdown( {options, value, onChange}) {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(()=>{
        const handler = (event) =>{
            console.log(event.target)
        }

        document.addEventListener('click', handler,  true)

        return () =>{
            document.removeEventListener('click', handler)
        }
    }, [])


    const handleClick = () =>{
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) =>{
        setIsOpen(false)
        onChange(option)
    }

    const renderOptions = options.map((option)=>{
        return (
            <div className="hover:bg-sky-100 rounded curson-pointer p-1" onClick={()=>handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        )
    })

    return (
        <div className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick} >
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg"/>
            </Panel>
            { isOpen && <Panel className="absolute top-full">{renderOptions}</Panel>}
        </div>
    )
}

export default Dropdown