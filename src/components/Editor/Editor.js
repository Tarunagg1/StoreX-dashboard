import React, { Fragment, useEffect, useRef } from 'react'
import Codemirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/dracula.css';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/lib/codemirror.css';


export default function Editor({code}) {
    const textAreaDiv = useRef();
    const editorRef = useRef(null);


    useEffect(() => {
        editorRef.current = Codemirror.fromTextArea(textAreaDiv.current, {
            mode: { name: "javascript", json: true },
            theme: 'dracula',
            autofocus: true,
            autoClose: true,
            autoCloseBrackets: true,
            lineNumbers: true,
            readOnly: true,
            smartIndent: true,
        })

        editorRef.current.setValue(code);

        // eslint-disable-next-line
    },[])

    return (
        <Fragment>
            <textarea ref={textAreaDiv} id="codemirror"></textarea>
        </Fragment>
    )
}
