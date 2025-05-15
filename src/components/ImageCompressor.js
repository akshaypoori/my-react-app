import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';

function ImageCompressor() {
    const [compressedFile, setCompressedFile] = useState(null);

    const handleImageUpload = async (event) => {
        const imageFile = event.target.files[0];
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true
        };
        try {
            const compressedImage = await imageCompression(imageFile, options);
            setCompressedFile(URL.createObjectURL(compressedImage));
        } catch (error) {
            console.error('Error compressing image:', error);
        }
    };

    return (
        <div>
            <h2>Compress JPEG</h2>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {compressedFile && <img src={compressedFile} alt="Compressed" />}
        </div>
    );
}

export default ImageCompressor;
