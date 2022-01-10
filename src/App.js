import React  from "react";


 import { Data } from "./data";

 import * as XLSX from "xlsx";
 import * as xlsx from "xlsx";

class ExcelToJson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      dataInFile:[]
    };
  }

 


   readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = xlsx.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = xlsx.utils.sheet_to_json(worksheet);
            console.log(json);
            this.setState({
              dataInFile: json
            })
        };
        reader.readAsArrayBuffer(e.target.files[0]);
    }
}


  render() {
    return (
      <div>
        <input
          type="file"
          id="file"
          ref="fileUploader"
          onChange={this.readUploadFile}
        />
       
        {/* {JSON.stringify(this.state.dataInFile[0] )} */}

        <br/>
        <br/>
        <br/>
        <br/>
        <table class="table table-striped">
                <thead>
                    <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>age</th>
                    </tr>
                </thead>
                <tbody>
                 
        {/* {this.state.dataInFile[1]} */}
                    
                {this.state.dataInFile.map( info =>
                 (
                  <tr>
                  <td>{info.Id}</td>
                  <td>{info.name}</td>
                  <td>{info.age}</td>
                  </tr>
                 )
                )}                    
                </tbody>
            </table>
      </div>
    );
  }
}

export default ExcelToJson;

// export default function App(){
//   const[ExcelData,setExcelData]=useState('')

//  function handleFile(e){

//    let selectFile = ExcelData;
//    if(selectFile){
//      alert('selectFile.type')
//     console.log(selectFile.type)
//    }else{
//      console.log('please select your file')
     

//    }
//    setExcelData(selectFile.type)
//  } 
 

//   return(
//     <>
//     <h1>hiiii</h1>
//     <div className="container">
//       <div className="form">
//         <form className="form-group" autoComplete="off">
//           <label><h5>Upload file</h5></label>
//           <br></br>
//           <input type='file' className="form-control" onChange={(e) => setExcelData(e.target.files[0])}  required></input>

//           <button type="submit" className="btn btn-success"
//           style={{marginTop:5+"px"}} onClick={(e) => handleFile(e)}>submit</button>
//         </form>
//       </div>

//       <br></br>
//       <hr></hr>
//       <h5>view excel file</h5>
//       <div className="viewer">
//         {ExcelData==null&&<>no file selected</>}
//         {ExcelData==null&&(
//           <div className="table-responsive">
//             <table className="table">
//             <thead>
//               <tr>
//                 <th scope="col">Id</th>
//                 <th scope="col">name</th>
//                 <th scope="col">age</th>
                



//               </tr>


//             </thead>
//             <tbody>
//               <Data ExelData={ExcelData}/>

//             </tbody>

//             </table>
//             </div>
//         )}
//       </div>
//     </div>
//     </>
//   )
// }
 