import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');

  const handleGenerateQrCode = () => {
    setQrCode(input);
    setInput('')
  };

  return (
    <div>
      <h2>QR Code Generator </h2>
      <div className='flex gap-5 m-5'>
        <input
          onChange={(e) => setInput(e.target.value)}
          type='text'
          name='qr-code'
          value={input}
          placeholder='Enter Value'
          className='border'
        />
        <button
          disabled={input && input.trim() !== '' ? false : true}
          onClick={handleGenerateQrCode}
          className='border-2 rounded-full px-4'
        >
          Generate
        </button>
      </div>

      <div >
        <QRCode id='qr-code-value' value={qrCode} size={300}/>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
