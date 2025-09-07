import React from 'react'
import { ScrollTrigger,SplitText  } from 'gsap/all'
import gsap from 'gsap'


gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
    <div class="text-gradient">
      App
    </div>
  )
}

export default App
