import { Data } from "./data";

export default function App(){
  const[ExcelData,setExcelData]=useState(null)

 const handleFile=(e)=>{
   let selectFile = e.target.files[0];
   if(selectFile){
    console.log(selectFile.type)
   }else{
     console.log('please select your file')
     

   }
   setExcelData(selectFile.type)
 } 
 
 

  return(
    <>
    <h1>hiiii</h1>
    <div className="container">
      <div className="form">
        <form className="form-group" autoComplete="off">
          <label><h5>Upload file</h5></label>
          <br></br>
          <input type='file' className="form-control" onChange={() =>(handleFile)} required></input>

          <button type="submit" className="btn btn-success"
          style={{marginTop:5+"px"}}>submit</button>
        </form>
      </div>

      <br></br>
      <hr></hr>
      <h5>view excel file</h5>
      <div className="viewer">
        {/* {ExcelData==null&&<>no file selected</>} */}
        {/* {ExcelData==null&&(
          <div className="table-responsive">
            <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">name</th>
                <th scope="col">age</th>
                



              </tr>


            </thead>
            <tbody>
              <Data ExelData={ExcelData}/>

            </tbody>

            </table>
            </div>
        )} */}
      </div>
    </div>
    </>
  )
}
 