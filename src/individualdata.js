import React from "react";

export const IndividualData = ({individualExcelData})=>{
    return(
        <>
        <th>{individualExcelData.Id}</th>
        <th>{individualExcelData.name}</th>
        <th>{individualExcelData.age}</th>
        </>

    )
}
