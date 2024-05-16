import React from 'react'
import Features from "../features/Features"
import Navbar from "../navbar/navbar"
import AdsComponent from "../ads/adsence"

const features = () => {
  return (
    <div>
    <Navbar/>
    <Features/>
    <div className="ads">
      <AdsComponent dataAdSlot="5462535426" />
     </div>
    </div>
  )
}

export default features