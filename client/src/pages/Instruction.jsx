import React from 'react'
import Button from "@mui/material/Button";



function Instruction() {
  return (
    <div>
      <div  style={{display: 'inline-block', textAlign: 'center', justifyContent:'center'}}>
      <h1 >Dos</h1>
      <p>Following are the do's : </p>
      <ul style={{ textAlign: 'left'}}>
      <li>1. Please share your screen before start answering the questions</li>
      <li> 2. Allow microphone and webcam before start of interview</li>
      <li> 3. Try to answer question within given time period</li>
      <li> 4. Only 10 questions will be given according which domain you have selected.</li>
      <li>5. After giving the answers, do click on "email to support" button.</li>
    </ul> 
      <h1>Dont's</h1>
      <p>Following are the Dont's :  </p>
      <ul style={{ textAlign: 'left'}}>
      <li> 1. All the activties of the screen is recoded, dont try to switch windows.</li>
      <li>  2. Dont start you mock before allowing screen sharing, emails wont be sent if screen not shared.</li>
      </ul>
      <Button variant="contained"  onClick={()=>{ window.location.href = `/mockInterview?${(window.location.href).split('?')[1]}` }} >NEXT</Button>
      </div>
    </div>
  )
}

export default Instruction