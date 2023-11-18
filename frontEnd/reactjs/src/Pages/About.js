import React from 'react'

const About = () => {
  return (
    <div id='about' className="w-full  flex justify-center pt-[5vw] pb-[5vw] text-[black]">
        <div className='w-[85vw] md:w-[90vw] bg-[#e8e9eb] shadow pt-[20px] pl-[20px] pr-[20px] pb-[60px]'>
          <h1 className='text-[25px] md:text-[50px] font-black text-[#008631] mb-[15px] pl-[10px]
          border-l-[5px] border-solid border-[#000] pl-[20px] mb-[20px]'>Who We Are</h1>
            <div className='w-[100%] flex flex-col md:flex-row'>
              <div className='w-[100%] md:w-[50%] md:pr-[10px] border-l-[5px] border-solid border-[#008631] pl-[20px] md:mb-[40px]'>
                <p>An industry pioneer in innovation and sustainability, Agro Agriculture is one of
                  the leading agriculture companies in Sri Lanka and a dominant player in Sri Lanka’s 
                  agricultural sector, offering many products and services to the local and export
                    markets. Sri Lankan farmers benefit from a diverse portfolio of agri-solutions, 
                    including seed and planting materials, fertilizer, crop protection products, land 
                    preparation and harvesting machines, household and industrial pest control services, 
                    landscaping solutions, veterinary and animal health products for pet care and livestock
                    markets.</p>
              </div>
              <div className='w-[100%] md:w-[50%] md:pl-[10px] border-l-[5px] border-solid border-[#008631] pl-[20px] md:border-[0] mb-[40px]'>
                <p>
                As the largest exporter of processed fruits and vegetables in Sri Lanka, we work with an 
                extensive farmer outgrower network across the island. We’ve been in F1 flower seed production 
                for export since the 1980s. Our tissue culture laboratory utilises state-of-the-art technology 
                to provide horticultural, edible, and flowering young plants through in-vitro tissue culture 
                technology. The Agro Agriculture Training School (HATS) is a registered training institution
                under the Tertiary and Vocational Education Commission offering agricultural input and technology 
                related training. 
                </p>
              </div>
            </div>

            <h1 className='text-[20px] md:text-[35px] font-black text-[#008631] mb-[15px] pl-[10px]
            border-l-[5px] border-solid border-[#000] pl-[20px] mb-[20px]'>Our Vision</h1>
            <div className='w-[100%] flex flex-col md:flex-row'>
              <div className='w-[100%] md:pr-[10px] border-l-[5px] border-solid border-[#008631] pl-[20px] mb-[40px]'>
                <p>Be the most trusted brand in agriculture.</p>
              </div>
            </div>

            <h1 className='text-[20px] md:text-[35px] font-black text-[#008631] mb-[15px] pl-[10px]
            border-l-[5px] border-solid border-[#000] pl-[20px] mb-[20px]'>Our Mission</h1>
            <div className='w-[100%] flex flex-col md:flex-row'>
              <div className='w-[100%] md:pr-[10px] border-l-[5px] border-solid border-[#008631] pl-[20px]'>
                <p>Supporting sustainable greener agriculture with Innovation, Quality inputs and Extension services.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About
