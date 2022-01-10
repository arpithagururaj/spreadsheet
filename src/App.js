import React  from "react";


 import { Data } from "./data";

 import * as XLSX from "xlsx";

class ExcelToJson extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      file: "",
      dataInFile: []
    };
  }

  handleClick(e) {
    this.refs.fileUploader.click();
  }

  filePathset(e) {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    console.log(file);
    this.setState({ file });

    console.log(this.state.file);
  }

  readFile() {
    var f = this.state.file;
    var name = f.name;
    const reader = new FileReader();
    reader.onload = (evt) => {
      // evt = on_file_select event
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      /* Update state */
      console.log("Data>>>" + data);// shows that excel data is read
      console.log(this.convertToJson(data)); // shows data in json format
      this.setState({
        dataInFile: this.convertToJson(data)
      })
    };
    reader.readAsBinaryString(f);
  }

  convertToJson(csv) {
    var lines = csv.split("\n");

    var result = [];

    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }

    return JSON.stringify(result); //JSON
  }



  render() {
    return (
      <div>
        <input
          type="file"
          id="file"
          ref="fileUploader"
          onChange={this.filePathset.bind(this)}
        />
        <button
          onClick={() => {
            this.readFile();
          }}
        >
          Read File
        </button>
        {this.state.dataInFile}

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
                    
                {/* {this.state.dataInFile.map( info =>
                 (
                  <tr>
                  <td>{info.id}</td>
                  <td>{info.name}</td>
                  <td>{info.age}</td>
                  </tr>
                 )
                )}                     */}
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
 