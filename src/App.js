import { useEffect, useState } from "react";
import { storage } from "./firebase"
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function App() {
  const [fileupload,setFileUpload] = useState(null)
  const [fileList,setFileList] = useState([])


  const fileListRef = ref(storage, "files/");
  const handleUploadFile =()=> {
    if(fileupload === null) return;
    const fileRef = ref(storage, `files/${fileupload.name + v4()}`)
    uploadBytes(fileRef, fileupload).then((snapshot)=> {
      alert("Image Uploaded!")
      getDownloadURL(snapshot?.ref).then((url)=> {
        setFileList((prev)=> [...prev,url])
      })
    })
  }

  useEffect(()=> {
    listAll(fileListRef).then((res)=> {
      res.items.forEach((item)=> {
        getDownloadURL(item).then((url)=> {
          setFileList((prev) => [...prev, url])
        })
      })
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
     <input type="file" name="myfile" onChange={(e)=>setFileUpload(e?.target?.files[0])} /><br /><br />
     <input type="submit" onClick={handleUploadFile} />
     <br /><br />
     <div>
        {fileList.map((url)=> {
          return <img 
          style={{border:'2px solid #000', padding:'5px',objectFit:'cover',display:'flex',flexDirection:'column',marginBottom:'5px'}}
          key={v4} src={url} alt="firebase_image" width="500" height="333" />
        })}
     </div>
    </div>
  );
}

export default App;
