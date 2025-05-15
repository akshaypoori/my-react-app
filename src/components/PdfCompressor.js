import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

function PdfCompressor() {
    const [compressedFile, setCompressedFile] = useState(null);

    const handlePdfUpload = async (event) => {
        const pdfFile = event.target.files[0];
        const arrayBuffer = await pdfFile.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer);
        const compressedPdfBytes = await pdfDoc.save({ useObjectStreams: false });
        const compressedPdfBlob = new Blob([compressedPdfBytes], { type: 'application/pdf' });
        setCompressedFile(URL.createObjectURL(compressedPdfBlob));
    };

    return (
        <div>
            <h2>Compress PDF</h2>
            <input type="file" accept="application/pdf" onChange={handlePdfUpload} />
            {compressedFile && <a href={compressedFile} download="compressed.pdf">Download Compressed PDF</a>}
        </div>
    );
}

export default PdfCompressor;
