import React from 'react'

function Page(props) {
  return (
    <div className="h-screen w-screen p-6">
        <div className={`${props.boxColor} h-full w-full rounded-2xl`}>
          {props.element}
        </div>
    </div>
  )
}

export default Page