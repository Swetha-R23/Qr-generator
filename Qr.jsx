import React, { useState } from 'react'
import qrcode from './assets/qrcode.jpg'

const Qr = () => {
    const [img,setImg]=useState("");
    const [loading,setLoading]=useState(false);
    const [qrdata,setQrdata]=useState("");
    const [qrsize,setQrsize]=useState("");
    function generateQR(){
        setLoading(true);
        try{
            const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
            setImg(url);
        }catch(error){
            console.log("error generating qr code:",error);
        }
        finally{
            setLoading(false);
        }
    }
    function downloadQR(name){
        fetch(img)
        .then((response)=>response.blob())
        .then((blob)=>{
            const link=document.createElement('a');
            link.href=window.URL.createObjectURL(blob);
            link.download='qrcode.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch((error)=>{
            console.log("error downloading qr code:",error);
        });
    }
  return (
    <div className='app-con'>
      <h1>Qrcode Genarator</h1>
      {loading && <p>Please wait...</p>}
      {img && <img src={img} alt='qr code' className='qr-img'/>}
      <div>
        <label htmlFor='data' className='input-label'>Data for qr code:</label>
        <input type="text" value={qrdata} placeholder="give link" id="datainput" onChange={(e)=>setQrdata(e.target.value)}/>
        <label htmlFor='data' className='input-label'>Size for qr code:</label>
        <input type="text" value={qrsize} placeholder="give size" id="datainput" onChange={(e)=>setQrsize(e.target.value)}/>
        <button className='generate-btn' disabled={loading}onClick={generateQR}>Generate</button>
        <button className='download-btn' onClick={downloadQR}>Download</button>
      </div>
    </div>

  )
}

export default Qr
