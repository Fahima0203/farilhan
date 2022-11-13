import React from "react";
import './dropzone.css'
import { useDropzone } from "react-dropzone";
import { useState, useCallback, cuid } from "react";
import ImageGrid from "./ImageGride";

function Dropzone({ open }) {
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({});
    // useDropzone({
    //     accept,
    //     onDrop,
    //   });
    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const [images, setImages] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);


    return (
        <div {...getRootProps({ className: "dropzone" })}>
            <input className="input-zone" {...getInputProps()} />
            <div className="text-center">
                {isDragActive ? (
                    <p className="dropzone-content">
                        Release to drop the files here
                    </p>
                ) : (
                    <p className="dropzone-content">
                        Drag & drop some files here, or click to select files
                    </p>
                )}
                <button type="button" onClick={open} className="btn">
                    Click to select files
                </button>
            </div>
            <aside>
                <ul>{files}</ul>
            </aside>
<hr></hr>
            <main className="App">
      <h1 className="text-center">Drag and Drop Test</h1>
      <Dropzone onDrop={onDrop} accept={"image/*"} />
      <ImageGrid images={images} />
    </main>

        </div>
    );
}
export default Dropzone;
