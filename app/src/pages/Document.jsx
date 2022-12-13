import React, { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

import {
    useLocation 
} from 'react-router-dom';

const Document = ({ setCurrentRoute }) => {
    const [document, setDocument] = useState("");
    const { quill, quillRef } = useQuill();

    const location = useLocation();
    setCurrentRoute(location.pathname);

    const loadingDocument = async () => {
        setDocument('<h1>React Hook for Quill!</h1>');

        if (quill) {
            quill.clipboard.dangerouslyPasteHTML(document);
        }
    }

    useEffect(() => {
        loadingDocument();
    }, [quill]);

    return (
        <div style={{ width: 500, height: 300 }}>
            <div ref={quillRef} />
        </div>
    )
}

export default Document;