import React from 'react'
import casualImg from "../../assets/images/browse-dress-style//image 11.png"
import formalImg from "../../assets/images/browse-dress-style//image 13.png"
import partyImg from "../../assets/images/browse-dress-style//image 12.png"
import gymImg from "../../assets/images/browse-dress-style//image 14.png"


const BrowseStyle = () => {
  return (
    <main className='bg-[rgba(242,240,241,1)] rounded-xl mx-3 my-12 px-3 py-5 lg:mx-16 lg:px-12 '>
        <h1 className='text-3xl text-center font-bold'>BROWSE BY DRESS STYLE </h1>
        
        <section className='grid grid-cols-1 gap-6 lg:gap-12 mt-8 lg:grid-cols-3 px-4 lg:px-0'>

          <div className='relative bg-white rounded-3xl rounded-r-xl shadow-2xl flex justify-end hover:scale-105 transition-all duration-300'>
            <img src={casualImg} alt="casual" className='rounded-3xl '/>
            <h1 className='absolute top-6 left-4 text-3xl lg:text-5xl font-bold'>Casual</h1>
          </div>

          <div className='relative bg-white rounded-3xl lg:col-span-2 flex justify-end hover:scale-105 transition-all duration-300'>
            <img src={formalImg} alt="casual" className='rounded-3xl'/>
            <h1 className='absolute top-6 left-4 text-3xl lg:text-5xl font-bold'>Formal</h1>
          </div>

          <div className='relative lg:col-span-2 bg-white rounded-3xl flex justify-end hover:scale-105 transition-all duration-300'>
            <img src={partyImg} alt="casual" className='rounded-3xl '/>
            <h1 className='absolute top-6 left-4 text-3xl lg:text-5xl font-bold'>Party</h1>
          </div>

          <div className='relative bg-white rounded-3xl flex justify-end hover:scale-105 transition-all duration-300'>
            <img src={gymImg} alt="casual" className='rounded-3xl'/>
            <h1 className='absolute top-6 left-4 text-3xl lg:text-5xl font-bold'>Gym</h1>
          </div>

        </section>
    </main>
  )
}

export default BrowseStyle