import React from 'react'

const About = () => {
  return (
    <div id='about' className="w-full bg-[#e8e9eb] flex justify-center pt-[25px] pb-[25px] text-[black]">
        <div className='w-[85vw] md:w-[70vw] bg-[#fff] shadow pt-[20px] pl-[20px] pr-[20px] pb-[60px]'>
          <h1 className='text-[50px] text-center font-black mb-[15px] '>Who We Are</h1>
            <div className='w-[100%] flex flex-col md:flex-row'>
              <div className='w-[100%] md:w-[50%] md:pr-[10px]'>
                <p>An industry pioneer in innovation and sustainability, Hayleys Agriculture is one of
                  the leading agriculture companies in Sri Lanka and a dominant player in Sri Lanka’s 
                  agricultural sector, offering many products and services to the local and export
                    markets. Sri Lankan farmers benefit from a diverse portfolio of agri-solutions, 
                    including seed and planting materials, fertilizer, crop protection products, land 
                    preparation and harvesting machines, household and industrial pest control services, 
                    landscaping solutions, veterinary and animal health products for pet care and livestock
                    markets.</p>
              </div>
              <div className='w-[100%] md:w-[50%] md:pl-[10px]'>
                <p>
                As the largest exporter of processed fruits and vegetables in Sri Lanka, we work with an 
                extensive farmer outgrower network across the island. We’ve been in F1 flower seed production 
                for export since the 1980s. Our tissue culture laboratory utilises state-of-the-art technology 
                to provide horticultural, edible, and flowering young plants through in-vitro tissue culture 
                technology. The Hayleys Agriculture Training School (HATS) is a registered training institution
                under the Tertiary and Vocational Education Commission offering agricultural input and technology 
                related training. 
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About
