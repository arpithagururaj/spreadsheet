import React from "react";
import {IndividualData} from './individualdata';

export  const Data =({exelData})=>{
  return  exelData.map((individualExcelData)=>(
      <tr key={individualExcelData.Id}>
          <IndividualData individualExcelData={individualExcelData}/>
      </tr>

  ))
}
 