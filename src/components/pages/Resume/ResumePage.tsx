import { Box, Button } from "@mui/material";

import resumePdf from "../../../assets/resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import { useState, useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const ResumePage = () => {
  const [width, setWidth] = useState(1200);

  const handleDownloadClick = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = resumePdf;
    downloadLink.download = "download.pdf";
    downloadLink.click();
  };
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "6rem",
        justifyContent: "center",
        paddingX: "6rem",
      }}
    >
      <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginBottom: "2rem" }}>
        <Button variant="contained" color="primary" onClick={handleDownloadClick}>
          Download Resume
        </Button>
      </Box>
      <Document file={resumePdf} className="d-flex" onLoadSuccess={({ numPages }) => console.log(numPages)}>
        <Page pageNumber={1} scale={width > 786 ? 2.1 : 1.2} />
      </Document>
    </Box>
  );
};

export default ResumePage;
