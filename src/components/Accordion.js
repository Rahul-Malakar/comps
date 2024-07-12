import { GoChevronDown, GoChevronRight  } from "react-icons/go";
import { useState } from "react";

function Accordion({ items }) {

    const [expandedIndex, setExpandedIndex] = useState(-1);
    

    const handleClick = (nextIndex) =>{
      setExpandedIndex((current)=>
        current===nextIndex ? -1 : nextIndex
      )      
    }
    
    const renderedItems = items.map((item, index) => {
      const isExpanded = index === expandedIndex;
      
      const icon = <span className="text-2xl">
        {isExpanded ? <GoChevronDown />: <GoChevronRight /> }
      </span>
      
    return (
      <div key={item.id}>
        <div className="flex p-3 bg-gray-50 border-b items-center curson-pointer" onClick={()=> handleClick(index)}>
          {icon}
          {item.label}</div>
        {isExpanded && <div className="broder-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
