import React, { useState } from 'react'

export default function Textform(props) {
    const handelupclick = () => {
        console.log("handelupclick called ");
        setText('text changed on click');

    }
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
