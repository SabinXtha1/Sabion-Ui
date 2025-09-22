import React from 'react'
import './BounceText.css'
const JelloEffect = ({ words, className }:{words:string,className?:string}) => {
  const nameArray = words.split("");
  

  return (
    <>
      <div className={`flex gap-[2px] sm:gap-1 ${className}`}>

        {
          nameArray.map((letter, index) => {

            return <p className=' jello' key={index}>

              {letter}
            </p>

          })
        }
      </div>
    </>
  )
}

export default JelloEffect