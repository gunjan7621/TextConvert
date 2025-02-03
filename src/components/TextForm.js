import React, { useState } from 'react'


export default function TextForm() {
    const handleUpClick = ()=>{
        console.log("Uppercase Waas clicked" +text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        console.log("Uppercase Waas clicked" +text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
        console.log("Uppercase Waas clicked" +text);
        let newText = "";
        setText(newText)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const handleOnChange=(event)=>
    {
        setText(event.target.value)
    }
    const handleReverse = (event) => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
      };
      const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
   }
   const handleCopy = ()=>{
var text = document.getElementById("myBox");
text.select();
navigator.clipboard.writeText(text.value);
   }
    const [text,setText]=useState("")
    return (
        <>
    <div>
      <div className="mb-3">
        <h1>Enter the text to analyze the result</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id ="myBox" rows ="8"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-1 my-1"  onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1 my-1"  onClick={handleClearClick}>Clear the Content</button>
<button type="submit" onClick={speak} className="btn btn-primary mx-1 my-1">Speak</button>
<button type="submit" onClick={handleReverse} className="btn btn-primary mx-1 my-1">Reverse</button>
<button type="submit" onClick={handleCapitalize} className="btn btn-primary mx-1 my-1">Capitalize</button>

<button type="submit" onClick={handleCopy} className="btn btn-primary mx-1 my-1">Copy to ClipBoard</button>

   </div>
   <div className="container">
    <h1>Your Text Summarry</h1>
     <p>{text.split(" ").length} Words and {text.length} Characters</p>
     <p> {0.008*text.split(" ").length} MInutes are needed to be taken to read this</p>
     <h3>Preview</h3>
     <p>{text}</p>
   </div>
   </>
  )
}
