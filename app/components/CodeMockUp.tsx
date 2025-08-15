import { Media, TiltFx } from '@once-ui-system/core'
import React from 'react'
import { motion } from "motion/react"
import { TypeAnimation } from "react-type-animation";


const CodeMockUp = () => {
  return (
    <TiltFx aspectRatio={3 / 4} radius="l">
      <div className="mockup-code w-fit">
        <pre data-prefix="$">
          <code>
            install 
            <TypeAnimation
              sequence={[
                " @Happiness", 4000, // wait 5s
                " @ClearMind", 4000,
                " @Calm", 4000,
                " @NoStress", 4000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-green-500"
            />
            </code>
        </pre>
      </div>
    </TiltFx>
  )
}

export default CodeMockUp