import { useState } from "react";
import Table from "./Table";
import { GoArrowDown, GoArrowUp } from 'react-icons/go';

function SortableTable(props) {

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const {config, data} = props;

    const handleClick = (label) =>{

        if(sortBy && label!==sortBy){
            setSortOrder('asc');
            setSortBy(label);
            return;
        }

        if(sortOrder === null){
            setSortOrder('asc');
            setSortBy(label);
        }
        else if(sortOrder === 'asc'){
            setSortOrder('desc');
            setSortBy(label);
        }
        else{
            setSortOrder(null);
            setSortBy(null);
        }
    }

    const updatedConfig = config.map((column) =>{

        if(!column.sortValue){
            return column;
        }

        
        return {
            ...column,
            header: () => {
                return (
                    <th className="cursor-pointer hover:bg-gray-100" onClick={()=> handleClick(column.label)}>
                        <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                        </div>
                    </th>
                )
            }
        }
    })

    // only sort data if sortOrder and sortBy are not null
    //make a copy of the 'data' prop
    //find the correct sortValue function and use it for sorting

    let sortedData = data;
    if(sortOrder && sortBy){
        const {sortValue} = config.find((column) => column.label === sortBy);

        sortedData = [...data].sort((a,b) => {
            const aValue = sortValue(a);
            const bValue = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if(typeof aValue === 'string'){
                return aValue.localeCompare(bValue) * reverseOrder;
            }
            else{
                return (aValue - bValue) * reverseOrder;
            }
        })
    }

    return (
        
       <div>
        {sortOrder} - {sortBy}
         <Table {...props} config = {updatedConfig} data={sortedData}/>
       </div>
    )
}

function getIcons(label, sortBy, sortOrder){
    if(label !== sortBy){
        return <div>
            <GoArrowUp/>
            <GoArrowDown/>
        </div>;
    }

    if(sortOrder === null){
        return <div>
        <GoArrowUp/>
        <GoArrowDown/>
    </div>;;
    }
    else if(sortOrder === 'asc'){
        return <div>
        
        <GoArrowUp/>
    </div>;;
    }
    else{
        return <div>
        <GoArrowDown/>
        
    </div>;;
    }
}

export default SortableTable;