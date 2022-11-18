import React from 'react'
import Feature from '../../components/Feature/Feature'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Hero-Section/Header'
import Navbar from '../../components/Navbar/Navbar'
import Plans from '../../components/Plan/Plans'

export default function HomePage() {
  return (
    <>
    <div>
        <Navbar/>
        <Header/>
        <Feature/>
        <Plans/>
        <Footer/>
    </div>
    </>
  )
}
