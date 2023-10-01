import React from 'react'

const TripData = (props) => {
  return (
    <div className="t-card bg-white rounded-lg shadow-md text-center p-4">
      <div className="t-image mx-auto mb-2">
        <img src={props.image} alt="DestImg" className="rounded-full" />
      </div>
      <h4 className="text-lg font-semibold mb-4">{props.heading}</h4>
      <p className="text-sm px-4">{props.text}</p>
    </div>
  )
}

export default TripData