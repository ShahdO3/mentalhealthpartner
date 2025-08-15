import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const IntroText = () => {
  return (
    <div className='p-5'>
        <strong>You</strong>
        <TypeAnimation
            sequence={[
            " are Strong 💪!", 2000, // wait 2s
            " Matter ✨!", 2000,
            "", 2000,
            "r Mental Health Matters 🧠!", 2000,
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}/>
    </div>
  )
}

export default IntroText