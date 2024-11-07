import React,{useState} from 'react'
import './input.css' 

export default function Input(props) {
  const Toupper=()=>{
    let newt=text.toUpperCase()
    settext(newt)
    props.showalert(props.alert,"Converted to uppercase")
    document.title="textUtils-Uppercase"
  }
  const Tolower=()=>{
    let newt=text.toLowerCase()
    settext(newt)
    props.showalert(props.alert,"Converted to lowercase")
    document.title="textUtils-Lowercase"
  }
  const changer=(evt)=>{
    settext(evt.target.value)
  }
  const cleartext=()=>{
    let cleartxt=""
    settext(cleartxt)
    props.showalert(props.alert,"Text Cleared")
    document.title="textUtils-ClearText"
  } 
  const copyText=()=>{
    let text=document.getElementById("exampleFormControlTextarea1") 
    text.select()
    navigator.clipboard.writeText(text.value)
    document.title="textUtils-CopyText"
    props.showalert(props.alert,"Text Copied")
  } 
  const removespaces=()=>{
    let spacetext=text.split(/[ ]+/)
    settext(spacetext.join(" ") 
    )
    props.showalert(props.alert,"Spaces Removed")
    document.title="Textutils-RemoveSpaces"
  }
  const [text,settext]=useState('')
  return (
    <div className='hellocontainer'>
        <div className='hello1 container'>       
          <h1 className='text-center'>Enter text below</h1>
          <textarea onChange={changer} value={text} className="form-control my-2" placeholder="write your text here" id="exampleFormControlTextarea1" rows="8"></textarea>
          <div className='thurr'>
          <button type="button" disabled={text.length===0} onClick={Toupper} className="btn btn-success mx-3 my-3">ToUppercase</button>
          <button type="button" disabled={text.length===0} onClick={Tolower} className="btn btn-success mx-3 my-3">ToLowercase</button>
          <button type="button" disabled={text.length===0} onClick={copyText} className="btn btn-success mx-3 my-3">Copy Text</button>
          <button type="button" disabled={text.length===0} onClick={removespaces} className="btn btn-success mx-3 my-3">Remove space</button>
          <button type="button" disabled={text.length===0} onClick={cleartext} className="btn btn-danger mx-3 my-3">ClearText</button>
          </div>
        </div> 
        <div className=" hello2 container my-2">
          <h6 className='a'>This Text contains {text.length} Characters & {text.split(" ").filter((e)=>{return e.length!==0}).length} words</h6>
          <h4 className='b'>Preview</h4>{text}
        </div>
        <div>
            <footer className="text-center  position-fixed bottom-0 start-0 end-0">
              <span className='c'>CopyRight @Saikrishna. All Rights Reserved<h6 className='bc'>Contact @krishsai335@gmail.com</h6></span>
            </footer>
        </div>
    </div>
  )
}
