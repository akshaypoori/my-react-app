import React from 'react';
import ImageCompressor from './components/ImageCompressor';
import PdfCompressor from './components/PdfCompressor';

function App() {
    return (
        <div>
            <h1>File Compressor</h1>
            <ImageCompressor />
            <PdfCompressor />
        </div>
    );
}

export default App;
