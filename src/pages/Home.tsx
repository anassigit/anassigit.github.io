import React from 'react'
import LGCNSjoinvent from '@/assets/LGCNS-joinvent.avif'
import joinvent from '@/assets/joinventimage.avif'
import LGsinarmas from '@/assets/Sinarmas-joinvent.avif'

import cloudIcon from '@/assets/icons/cloud-icon.svg'
import { Card } from '@/components/ui/card'

const Home: React.FC = () => {
  return (
    <div className='px-[31px] md:px-[62px]'>
      <section id='heading' className={`md:bg-[url(src/assets/hero-with-image-crop.avif)] md:bg-cover bg-center md:h-[82vh] flex flex-col justify-center md:gap-15 md:-mr-[62px]`}>
        <div id='heading-left-text' className='md:w-[40vw] font-bold flex flex-col md:justify-center my-5'>
          <h2 className='text-xl md:text-[4vh] text-lgsm-red'>Innovation for a Better Future</h2>
          <h1 className='text-2xl md:text-[5vh]'>Digital Growth Partner LG Sinarmas Technology Solutions</h1>
        </div>
        <div className='md:hidden relative w-screen -ml-[31px]'>
          <img src={'src/assets/hero-with-image-original.png'} />
        </div>
        <div className='flex flex-row md:w-[32vw] w-full items-center py-8 px-[15px]'>
          <div>
            <img src={LGCNSjoinvent} className='rounded-2xl' />
          </div>
          <div>
            <img src={joinvent} className='size-fit' />
          </div>
          <div>
            <img src={LGsinarmas} className='rounded-2xl' />
          </div>
        </div>
      </section>
      <section id='content' className='flex flex-col gap-5 py-5'>
        {/* title section */}
        <div className='text-2xl md:text-4xl font-bold'>
          <p>World class area of</p>
          <p>LG Sinarmas Technology Solutions</p>
        </div>
        {/* cards section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          <Card className='flex flex-col p-5 md:p-10'>
            <img src={cloudIcon} className='w-10 h-10' />
            <h1 className='text-xl md:text-2xl font-bold my-2'>
              Data Center & Cloud Service
            </h1>
            <p>
              Metro DC Strategic with Artificial Intelligence (AI) Ready
            </p>
          </Card>
          <Card className='flex flex-col p-5 md:p-10'>
            <img src={cloudIcon} className='w-10 h-10' />
            <h1 className='text-xl md:text-2xl font-bold my-2'>
              Data Center & Cloud Service
            </h1>
            <p>
              Metro DC Strategic with Artificial Intelligence (AI) Ready
            </p>
          </Card>
          <Card className='flex flex-col p-5 md:p-10'>
            <img src={cloudIcon} className='w-10 h-10' />
            <h1 className='text-xl md:text-2xl font-bold my-2'>
              Data Center & Cloud Service
            </h1>
            <p>
              Metro DC Strategic with Artificial Intelligence (AI) Ready
            </p>
          </Card>
          <Card className='flex flex-col p-5 md:p-10'>
            <img src={cloudIcon} className='w-10 h-10' />
            <h1 className='text-xl md:text-2xl font-bold my-2'>
              Data Center & Cloud Service
            </h1>
            <p>
              Metro DC Strategic with Artificial Intelligence (AI) Ready
            </p>
          </Card>
          <Card className='flex flex-col p-5 md:p-10'>
            <img src={cloudIcon} className='w-10 h-10' />
            <h1 className='text-xl md:text-2xl font-bold my-2'>
              Data Center & Cloud Service
            </h1>
            <p>
              Metro DC Strategic with Artificial Intelligence (AI) Ready
            </p>
          </Card>
          <Card className='flex flex-col p-5 md:p-10'>
            <img src={cloudIcon} className='w-10 h-10' />
            <h1 className='text-xl md:text-2xl font-bold my-2'>
              Data Center & Cloud Service
            </h1>
            <p>
              Metro DC Strategic with Artificial Intelligence (AI) Ready
            </p>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Home