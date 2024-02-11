import React, { useState } from 'react'

export default function Textform(props) {

    // onclick to change the text lower case to upper case

    const handelupclick = () => {
        console.log("handelupclick called ");
        let newtext = text.toUpperCase();
        setText(newtext);

    }

    // handel changes on text area during typing

    const handelchange = (event) => {
        console.log("handelchage called");
        setText(event.target.value);
    }
    const [text, setText] = useState('enter the text here');
    return (
        <div>
            <h1>{props.heading}</h1>
            <form>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handelchange} id="myBox" rows="8"></textarea>
                    <button type='button' className="btn btn-primary" onClick={handelupclick} >Convert to Uppercase</button>

                </div>

            </form>
        </div>
    )
}
