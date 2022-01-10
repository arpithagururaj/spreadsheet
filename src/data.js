import React from "react";
import {IndividualData} from './individualdata';

export  const Data =({exelData})=>{
    exelData.map((individualExcelData) =>{
      
      return( <tr   key={individualExcelData.Id}>
          <IndividualData individualExcelData={individualExcelData}/>
          
      </tr>)

  })
  
}
 