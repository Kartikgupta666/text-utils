import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState('enter the text here');

    // onclick to change the text lower case to upper case

    const handelupclick = () => {

        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UpperCase", "success");
    }
    // onclick to change the text upper case to lower case

    const handeldnclick = () => {

        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to LowerCase", "success");

    }
    // handel changes on text area during typing

    const handelchange = (event) => {

        setText(event.target.value);
    }
    // clear button function 
    const clear = () => {

        setText(' ');
        props.showAlert("Text cleared", "success");

    }
    // copy function
    const handlecopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            props.showAlert("Text copied to clipboard!", "success");

            setText(' ');
        }
        catch (err) {
            console.error('Unable to copy text to clipboard:', err);
            props.showAlert('Unable to copy text to clipboard:', 'danger');

        }
    }

    // cut 

    // const cut = async () => {
    //     try {
    //         await navigator.clipboard.writeText(text);
    //         props.showAlert("Text copied to clipboard!", "success");


    //     } catch (err) {
    //         console.error('Unable to copy text to clipboard:', err);
    //     }
    // }

    // remove extra space 

    const removespace = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(""));
        props.showAlert("Extraspaces removed from the text", "success");

    }

    // Underline under text

    const underline = () => {
        let newtext = document.getElementById("myBox");


        if (newtext.style.textDecoration) {
            newtext.style.removeProperty('text-decoration');
            props.showAlert('Underline removed from the text', 'warning')
        } else {
            newtext.style.setProperty('text-decoration', 'underline');
            props.showAlert('Text underlined successfully', 'success')
        }
    }

    //  cross

    const crossthrough = () => {
        let newtext = document.getElementById("myBox");
        if (newtext.style.textDecoration) {
            newtext.style.removeProperty('text-decoration');
            props.showAlert('cross removed', 'warning');
        }
        else {
            newtext.style.setProperty('text-decoration', 'line-through');
            props.showAlert('cross applied on the text', 'success');
        }
    }

    const textArray = text.trim().split(" ")
    const Text = textArray[textArray.length - 1] === "" ? textArray.length - 1 : textArray.length

    return (
        <>
            <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >

                <div>
                    <h1>{props.heading}</h1>

                    <div className="mb-3" >

                        <textarea className="form-control" value={text} onChange={handelchange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                        <br />
                        <div>
                            <button type='button' className="btn btn-primary mx-2 " onClick={handelupclick} >Convert to Uppercase</button>
                            <button type='button' className="btn btn-primary mx-2" onClick={handeldnclick} >Convert to Lowercase</button>
                            <button type='button' className="btn btn-primary mx-2" onClick={removespace} >Remove Space</button>
                            <button type='button' className="btn btn-primary mx-2" onClick={clear} >Clear</button>
                            <button type='button' className="btn btn-primary mx-2" onClick={handlecopy} >Copy</button>
                            <button type='button' className="btn btn-primary mx-2" onClick={underline} >Underline</button>
                            <button type='button' className="btn btn-primary mx-2" onClick={crossthrough} >Cross</button>
                            {/* <button type='button' className="btn btn-primary mx-2" onClick={cut} >Cut</button> */}

                        </div>

                    </div>

                </div >
                <div className="container mt-3">
                    <h1>your text summary</h1>
                    <p>{Text} words and {text.trim().length} characters</p>
                    <p>{0.008 * text.split("").length} minutes to read this </p>
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text.trim() : "There's no text to show!!"}</p>

                </div>

            </div>
        </>

    )
}


