import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Wrapper({children}:{children:any}) {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default Wrapper