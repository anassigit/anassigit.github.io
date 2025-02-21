import React from 'react'
import LGCNSjoinvent from '@/assets/LGCNS-joinvent.avif'
import joinvent from '@/assets/joinventimage.avif'
import LGsinarmas from '@/assets/Sinarmas-joinvent.avif'

import cloudIcon from '@/assets/icons/cloud-icon.svg'
import financeIcon from '@/assets/icons/finance-icon.svg'
import gdcIcon from '@/assets/icons/gdc-icon.svg'
import smartCityIcon from '@/assets/icons/smart-city-icon.svg'
import smartFactoryIcon from '@/assets/icons/smart-factory-icon.svg'
import telecomIcon from '@/assets/icons/telecom-icon.svg'

import createLocalIcon from '@/assets/icons/create-local-icon.svg'
import bestInClassIcon from '@/assets/icons/best-in-class-icon.svg'
import achieveGlobalIcon from '@/assets/icons/achieve-global-icon.svg'

import { Card } from '@/components/ui/card'

const Home: React.FC = () => {
  return (
    <>
      <section id='heading' className={`md:bg-[url(src/assets/hero-with-image-crop.avif)] md:bg-cover bg-center md:h-[82vh] flex flex-col justify-center md:gap-[3vh] px-[28px] md:px-[3vw]`}>
        <div id='heading-left-text' className='md:w-[40vw] font-bold flex flex-col md:justify-center my-5'>
          <h2 className='text-xl md:text-[4vh] text-lgsm-red'>Innovation for a Better Future</h2>
          <h1 className='text-[3vh] md:text-[5vh]'>Digital Growth Partner LG Sinarmas Technology Solutions</h1>
        </div>
        <div className='md:hidden relative w-screen -ml-[28px]'>
          <img src={'src/assets/hero-with-image-original.png'} />
        </div>
        <div className='flex flex-row md:size-fit size-full items-center py-8 px-[15px] md:px-0'>
          <div className='md:size-[22vh]'>
            <img src={LGCNSjoinvent} className='rounded-2xl md:w-full' />
          </div>
          <div className='md:size-[20vh] flex justify-center items-center'>
            <img src={joinvent} className='w-[85%]' />
          </div>
          <div className='md:size-[22vh]'>
            <img src={LGsinarmas} className='rounded-2xl md:w-full' />
          </div>
        </div>
      </section>

      {/* content 1 */}
      <section id='content' className='flex flex-col gap-5 py-10 bg-[#FFFBF8] px-[28px] md:px-[3vw]'>
        {/* title section */}
        <div className='text-[3.2vh] md:text-[4vh] font-bold md:py-5 md:pt-[5vw]'>
          <p>World class area of</p>
          <p>LG Sinarmas Technology Solutions</p>
        </div>
        {/* cards section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[3vw] h-full w-full'>
          <Card className='md:w-[30vw] flex flex-col p-5 md:p-[2vw]'>
            <img src={cloudIcon} className='w-[5vh] h-[5vh]' />
            <h1 className='text-xl md:text-[3vh] font-bold my-2'>
              Data Center & Cloud Service
            </h1>
            <p className="text-[2.5vh]">
              Metro DC Strategic with Artificial Intelligence (AI) Ready
            </p>
          </Card>
          <Card className='md:w-[30vw] flex flex-col p-5 md:p-[2vw]'>
            <img src={financeIcon} className='w-[5vh] h-[5vh]' />
            <h1 className='text-xl md:text-[3vh] font-bold my-2'>
              Finance Service
            </h1>
            <p className="text-[2.5vh]">
              Banking solution for core banking, channel and Unit Solution
            </p>
          </Card>
          <Card className='md:w-[30vw] flex flex-col p-5 md:p-[2vw]'>
            <img src={smartCityIcon} className='w-[5vh] h-[5vh]' />
            <h1 className='text-xl md:text-[3vh] font-bold my-2'>
              Public & Smart City
            </h1>
            <p className="text-[2.5vh]">
              E-Government and smart city with proven track record around the world
            </p>
          </Card>
          <Card className='md:w-[30vw] flex flex-col p-5 md:p-[2vw]'>
            <img src={smartFactoryIcon} className='w-[5vh] h-[5vh]' />
            <h1 className='text-xl md:text-[3vh] font-bold my-2'>
              Smart Factory
            </h1>
            <p className="text-[2.5vh]">
              Automotive, Pharmaceutical, automated warehouse, electronic and chemical. Supported by real-world success stories.
            </p>
          </Card>
          <Card className='md:w-[30vw] flex flex-col p-5 md:p-[2vw]'>
            <img src={telecomIcon} className='w-[5vh] h-[5vh]' />
            <h1 className='text-xl md:text-[3vh] font-bold my-2'>
              Telecommunication
            </h1>
            <p className="text-[2.5vh]">
              Develop a system in one of biggest telco in Korea to improve its operation to become a world-class telco company
            </p>
          </Card>
          <Card className='md:w-[30vw] flex flex-col p-5 md:p-[2vw]'>
            <img src={gdcIcon} className='w-[5vh] h-[5vh]' />
            <h1 className='text-xl md:text-[3vh] font-bold my-2'>
              Global Delivery Center (GDC)
            </h1>
            <p className="text-[2.5vh]">
              Develop local Indonesian IT resources that can compete in the international market for LG Group
            </p>
          </Card>
        </div>
      </section>

      {/* content 2 */}
      <section id='content-2' className='flex flex-col gap-5 py-10 px-[28px] md:px-[3vw]'>
        {/* title section */}
        <div className='text-[3.2vh] md:text-[4vh] font-bold md:py-5 md:pt-[3vw]'>
          <p>Why LGCNS and Sinarmas Group</p>
        </div>
        {/* cards section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[3vw] h-full w-full'>
          <Card className='md:w-[30vw] flex flex-col p-5 md:p-[2vw] items-center text-center shadow-[0_0_28px_0_rgba(0,0,0,0.05)]'>
            <img src={createLocalIcon} className='w-[11vh] h-[11vh]' />
            <h1 className='text-xl md:text-[3vh] font-bold my-2'>
              Create Local Ecosystem
            </h1>
            <p className="text-[2.5vh]">
              Committed to developing a sustainable local ecosystem, achieved through partnerships with global top-tier companies and local businesses
            </p>
          </Card>
          <Card className='md:w-[30vw] flex flex-col p-5 md:p-[2vw] items-center text-center shadow-[0_0_28px_0_rgba(0,0,0,0.05)]'>
            <img src={bestInClassIcon} className='w-[11vh] h-[11vh]' />
            <h1 className='text-xl md:text-[3vh] font-bold my-2'>
              Best in class experience Foreign Investment Case
            </h1>
            <p className="text-[2.5vh]">
              Highly experience and specialized globally for the project funded using global investment agencies, especially the Korea Government Funding Agency
            </p>
          </Card>
          <Card className='md:w-[30vw] flex flex-col p-5 md:p-[2vw] items-center text-center shadow-[0_0_28px_0_rgba(0,0,0,0.05)]'>
            <img src={achieveGlobalIcon} className='w-[11vh] h-[11vh]' />
            <h1 className='text-xl md:text-[3vh] font-bold my-2'>
              Achieve Global Standard
            </h1>
            <p className="text-[2.5vh]">
              Proven track records and solutions in the local with reference to the global level
            </p>
          </Card>
        </div>
      </section>
    </>
  )
}

export default Home