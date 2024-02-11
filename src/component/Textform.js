import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('enter the text here');

    // onclick to change the text lower case to upper case

    const handelupclick = () => {

        let newtext = text.toUpperCase();
        setText(newtext);

    }
    // onclick to change the text upper case to lower case

    const handeldnclick = () => {

        let newtext = text.toLowerCase();
        setText(newtext);
    }
    // handel changes on text area during typing

    const handelchange = (event) => {

        setText(event.target.value);
    }
    // clear button function 
    const clear = () => {

        setText(' ');
    }
    // styling unction using state method
    const [mystyle, setMystyle] = useState({
        backgroundColor: 'white',
        color: 'black'
    });

    const [btntxt, setBtnTxt] = useState('Enable Dark mode')

    const Togglestyle = () => {
        if (mystyle.color === 'white') {
            setMystyle({
                backgroundColor: 'white',
                color: 'black'
            })
            setBtnTxt("Enable Dark mode")
        }
        else {
            setMystyle({
                backgroundColor: 'black',
                color: 'white'
            })
            setBtnTxt("Enable Light mode")

        }
    }

    return (
        <>
            <div style={mystyle}>

                <div>
                    <h1>{props.heading}</h1>

                    <div className="mb-3" >

                        <textarea className="form-control" value={text} onChange={handelchange} id="myBox" rows="8"></textarea>
                        <br />

                        <button type='button' className="btn btn-primary mx-2 " onClick={handelupclick} >Convert to Uppercase</button>
                        <button type='button' className="btn btn-primary mx-2" onClick={handeldnclick} >Convert to Lowercase</button>
                        <button type='button' className="btn btn-primary mx-2" onClick={clear} >Clear</button>
                        <button type='button' className="btn btn-primary mx-2" onClick={Togglestyle} > {btntxt} </button>


                    </div>

                </div >
                <div className="container mt-3" >
                    <h1>your text summary</h1>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} minutes to read this </p>
                    <h2>Preview</h2>
                    <textarea className="form-control" value={text} onChange={handelchange} id="myBox" rows="8" disabled></textarea>

                </div>

            </div>
        </>
    )
}
