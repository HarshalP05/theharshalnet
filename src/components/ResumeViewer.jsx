import { useEffect, useState, useMemo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { supabase } from "../lib/supabaseClient";
import DownloadPopup from "./DownloadPopup";
import "./ResumeViewer.css";

// ✅ Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function ResumeViewer() {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [scale, setScale] = useState(1.5);

  // ✅ Memoize options (fixes reload warnings)
  const pdfOptions = useMemo(
    () => ({
      cMapUrl: "cmaps/",
      cMapPacked: true,
    }),
    []
  );
const handleDownload = () => {
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "Harshal_Patil_Resume.pdf"; // ✅ forces download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  onClose();
};

  // ✅ Dynamically adjust PDF scale based on window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) setScale(0.9); // small phones
      else if (width < 768) setScale(1.1); // tablets
      else if (width < 1024) setScale(1.3); // small laptops
      else setScale(1.6); // desktops
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Load PDF from Supabase (signed URL)
  useEffect(() => {
    let signedUrl = null;
    const loadPDF = async () => {
      try {
        const { data, error } = await supabase.storage
          .from("files")
          .createSignedUrl("Harshal_Patil_Resume_v2.pdf", 600);

        if (error) throw error;

        signedUrl = data.signedUrl;
        setDownloadUrl(signedUrl);
        setPdfUrl(signedUrl);
      } catch (err) {
        console.error("Error loading PDF:", err.message);
      }
    };

    loadPDF();

    return () => {
      if (signedUrl?.startsWith("blob:")) URL.revokeObjectURL(signedUrl);
    };
  }, []);

  return (
    <div className="resume-container text-center py-10 px-4">
      <h1 className="text-3xl font-semibold mb-6 text-blue-400">My Resume</h1>

      {pdfUrl ? (
        <div className="resume-frame mx-auto border-2 border-blue-400 rounded-xl shadow-lg bg-[#001a24] p-3 max-w-5xl">
          <Document
            file={pdfUrl}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={<p className="text-gray-400">Loading PDF...</p>}
            options={pdfOptions}
          >
            {Array.from(new Array(numPages), (_, index) => (
              <div key={`page_container_${index + 1}`} className="flex justify-center">
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  scale={scale}
                  className="pdf-page"
                />
              </div>
            ))}
          </Document>
        </div>
      ) : (
        <p className="text-gray-400">Loading your resume...</p>
      )}

      <button
        className="download-btn mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
        onClick={() => setShowPopup(true)}
      >
        Download Resume
      </button>

      {showPopup && (
        <DownloadPopup onClose={() => setShowPopup(false)} fileUrl={downloadUrl} />
      )}
    </div>
  );
}


