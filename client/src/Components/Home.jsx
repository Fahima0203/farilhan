// import React, { useState } from 'react'
// import axios from "axios"
// import FileBase64 from 'react-file-base64';
// import './form.css'
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// //import Nav from 'react-bootstrap/Nav';
// import Nbar from './Navbar'

// function Home() {
//     const notify = () => toast(" hi");
//     const [item, setItem] = useState({image: '', desc: '', price: ' ' });

//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         console.log(item)
//         axios({
//             method: 'post',
//             url: 'http://localhost:5001/upload',
//             //url: "https://flora-host.herokuapp.com/upload",
//             data: item //formData
//         })
//     }

//     return (
//         <>
//             <Nbar />
//             <div className="">
//                 <h2></h2>
//                 <div className="card p-5" style={{ margin: "50px 1%", border: "2px solid #343a40", borderRadius: "1.5rem" }}>
//                     <div className="card-body" src={{ display:"flex", justifyContent:"center"}}>
//                         <form onSubmit={handleFormSubmit} action="/FoodAdded" >

//                             <label className="form-label">Attach Image</label>
//                             <FileBase64
//                                 type="file" required
//                                 multiple={false}
//                                 onDone={({ base64 }) => setItem({ ...item, image: base64 })}
//                             />

//                             <button className="card__btn" onClick={notify}>Submit</button>

//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Home
import Navbar from './Navbar'
import React from "react";
import Dropzone from "./Dropzone";
function Home() {
  // const [images, setImages] = useState([]);
  return (
    <div>
        <Navbar/>
      <div className="container">
        <h1 className="text-center">Drag and Drop Test</h1>
        <Dropzone />
      </div>
    </div>
  );
}
export default Home;