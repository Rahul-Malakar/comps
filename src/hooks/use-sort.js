import {useState} from 'react';

function useSort(data, config){

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const setSortColumn = (label) =>{

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

    return {setSortColumn, sortBy, sortOrder, sortedData};

}

export default useSort;