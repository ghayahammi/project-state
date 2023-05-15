import React from 'react'
import './App.css'
import img1 from './005.JPG'
import Timer from './Timer'


function Person() {
    let fullname="Ghaya Hammi"
    let bio="We are not only designing the applications but also designing the future for you"
    let profession ="Web Developer"
    return (
    <div>
      <img src={img1}/>
        <h3>{fullname}</h3>
        <h4>{bio}</h4>
        <h4>{profession}</h4>
<Timer/>

    </div>
  )
}

export default Person