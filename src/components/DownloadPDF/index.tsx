import html2pdf from 'html2pdf.js';

const DownloadPDF = () => {
  const handleDownload = async () => {
    const element = document.querySelector('.flex.shadow-xl');
    if (!element) return;

    const opt = {
      margin: 0.5,
      filename: 'my-cv.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        logging: true,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      },
      jsPDF: { 
        unit: 'in', 
        format: 'a4', 
        orientation: 'portrait'
      }
    };

    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="fixed top-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
    >
      Tải xuống PDF
    </button>
  );
};

export default DownloadPDF; 