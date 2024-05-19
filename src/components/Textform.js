import React, {useState}from 'react';
export default function Textform(props) {
  const [text,setText]= useState("Enter Text Here");
  // const[analysis,setAnalysis]=useState({letters:0,characters:0})
  const onClick=()=>{
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper Case!","success")
  }
  const onClickl=()=>{
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower Case!","success")
  }
  const handleOnchange=(e)=>{
     setText(e.target.value);

  }
  const copy=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied Successfully!","success")
  }
  const clear=()=>{
    setText('');
    props.showAlert("Cleared!","danger")
  }

 
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8" style={props.tarea}></textarea>
      </div>
      <button className="btn btn-primary  my-3" onClick={onClick} >Convert To Upper Case</button>
      <button className="btn btn-primary mx-5 my-3" onClick={onClickl}>Convert To Lower Case</button>
      <button className="btn btn-primary mx-3 my-3" onClick={copy}>Copy Text</button>
      <button className="btn btn-primary mx-3 my-3" onClick={clear}>Clear</button>
      <div className="analysis my-3">
      <h2>Your Text Analysis</h2>
      <div className="container " >Number of characters is {text.replace(/\s/g, '').length} and number of words is {text.trim().split(/\s+/).filter(word => word.length > 0).length}</div>
      </div>
     
    </div>

  );
}

// Set default props
Textform.defaultProps = {
  heading: "Enter the text to analyze",
};
