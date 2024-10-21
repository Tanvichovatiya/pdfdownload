import React from 'react';
import { jsPDF } from 'jspdf';
const PdfDownload = () => {
const generatePDF = () => {
const doc = new jsPDF();
doc.text('Hello world!', 10, 10);
doc.save('sample.pdf');
};
return (
<div style={{ textAlign: 'center', marginTop: '50px' }}>
<h1 className='text-center mt-5 font-semibold text-[30px]'>Download PDF Example</h1>
<button onClick={generatePDF} style={{ padding: '10px 20px', fontSize:
'16px' }} className='text-center p-2 bg-blue-800 text-gray-400 mt-5'>
Download PDF
</button>
</div>
);
};
export default PdfDownload;