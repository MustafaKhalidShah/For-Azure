// This file contains the code for the Reports page
// Imports
// Libraries
import { pdfjs, Document, Page } from "react-pdf";
import { useState } from "react";

// Components

// Types
import type { PDFDocumentProxy } from "pdfjs-dist";
type PDFFile = string | File | null;

// Set up the worker for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

// Options for the pdf viewer
const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/fonts/",
};

const Reports = () => {
  // State variables for the pdf viewer
  const [file, setFile] = useState<PDFFile>(null);
  const [downloadLink, setDownloadLink] = useState<string>("");
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);

  // Function to handle the file change from each button
  const handleFileChange = (file: PDFFile) => {
    setFile(file);
    setCurrentPage(1);
  };

  // Function to handle the document load
  const onDocumentLoadSuccess = ({
    numPages: nextNumPages,
  }: PDFDocumentProxy) => {
    setNumPages(nextNumPages);
  };

  // Function to handle the page change
  const handlePageChange = (offset: number) => {
    setCurrentPage((prevPage) => prevPage + offset);
  };

  return (
    <div className="content-wrapper">
      <div className="report-content-wrapper">
        <h1>Reports</h1>
        <div className="report-section">
          <div className="report-options">
            <button
              className="instrument-report"
              onClick={() => {
                handleFileChange("http://localhost:3000/Software_Specs.pdf");
                setDownloadLink("http://localhost:3000/Software_Specs.pdf");
              }}
            >
              Instrument Report
            </button>
            <button
              className="service-report"
              onClick={() => {
                handleFileChange("http://localhost:3000/Service_Report.pdf");
                setDownloadLink("http://localhost:3000/Service_Report.pdf");
              }}
            >
              Service Report
            </button>
            <button
              className="bom-report"
              onClick={() => {
                handleFileChange("http://localhost:3000/Revision_History.pdf");
                setDownloadLink("http://localhost:3000/Revision_History.pdf");
              }}
            >
              BOM Report
            </button>
            <button
              className="raw-dates"
              onClick={() => {
                handleFileChange("http://localhost:3000/Checklist.pdf");
                setDownloadLink("http://localhost:3000/Checklist.pdf");
              }}
            >
              Raw Dates
            </button>
          </div>
          <div className="report-preview">
            <div className="pdf-container" ref={(ref) => setContainerRef(ref)}>
              <Document
                className=""
                file={file}
                options={options}
                onLoadSuccess={onDocumentLoadSuccess}
                error="Failed to load the document. Please try again."
                loading="Loading PDF document..."
                noData="No document selected. Please select an option on the left."
              >
                <Page
                  key={`page_${currentPage}`}
                  pageNumber={currentPage}
                  renderAnnotationLayer={false}
                  renderInteractiveForms={false}
                  renderTextLayer={false}
                />

                <div className="pagination-container">
                  <button
                    className="prev-btn"
                    onClick={() => handlePageChange(-1)}
                    disabled={currentPage <= 1}
                  >
                    <span className="material-symbols-outlined">
                      arrow_back_ios
                    </span>
                  </button>
                  <span>
                    Page {currentPage} of {numPages}
                  </span>
                  <button
                    className="next-btn"
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage >= numPages}
                  >
                    <span className="material-symbols-outlined">
                      arrow_forward_ios
                    </span>
                  </button>
                </div>
              </Document>
            </div>
          </div>
        </div>
        <div className="bottom-actions">
          {/* Back button */}
          <button className="back-btn" onClick={() => window.history.back()}>
            Back
          </button>
          {/* Generate button */}
          <a href={downloadLink} download>
            <button className="generate-btn">Generate</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reports;
