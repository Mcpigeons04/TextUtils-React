import React, { useState } from 'react' //usestate is a hook


export default function TextForm(props) {
    const handleupclick =()=>{
        console.log("uppercase was clicked" + text);
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showalert("converted to Uppercase","success")
    }
    const handleonchange =(event)=>{
        console.log("on change");
        setText(event.target.value)

    }
    const handleloclick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showalert("converted to lower case","success")
        
    }
    const handlereverseclick=()=>{
        let newtext=text.split("").reduce((acc, char) => char + acc, "");
        setText(newtext)
        props.showalert("reversed the text!","success")
        
    }
    const handleclearclick=()=>{
        let newtext='';
        setText(newtext)
        props.showalert("Cleared","success")
    }
    const [text, setText] = useState('enter text here');
  return (
    <>
    <div className="container">
        <div className="mb-3">
        <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} rows="8" value={text} onChange={handleonchange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handlereverseclick}>reverse the text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length}characters</p>
        <p>{0.008*text.split(" ").length} minutes it will take to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something here to preview"}</p>
    </div>
    </>
  )
}
// rendering form from the bootstrap.