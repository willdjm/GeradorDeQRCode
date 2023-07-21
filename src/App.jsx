import { useState } from "react";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";

import './App.css'

function App() {
  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(link_url){
    QRCodeLink.toDataURL(link_url,{
      width: 600,
      margin: 3,
    }, function(err, url){
      setQrcodeLink(url);
    })
  }

  function handleQrcode (e){
    setLink(e.target.value);
    handleGenerate(e.target.value)
  }

  return (
    <div className='container'>
      <h1>Gerador de QRCode</h1>

      <div className="qrcode">
      <QRCode
      value={link}
      />
      </div>

      <input 
      className='input' 
      placeholder='Digite seu link...'
      value={link}
      onChange={(e) => handleQrcode(e)} 
      />
      <a href={qrcodeLink}download={`qrconde.png`}>Baixar QRCode</a>
    </div>
  )
}

export default App
