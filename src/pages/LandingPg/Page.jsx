import React from 'react'
import HeaderSection from './HeaderSection'
import Nav from '../../components/Nav'
import BrandLogos from './BrandLogos'
import Footer from './Footer'

const Page = () => {
  return (
    <div className='pt-6'>
        <Nav/>
        <HeaderSection/>
        <BrandLogos/>
        <Footer/>
    </div>
  )
}

export default Page