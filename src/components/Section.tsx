import React from 'react'
import { Box, Heading, Image } from '@chakra-ui/react'
import Poolhouse from '/src/assets/images/homepoolout.png'
import dollarsign from '/src/assets/images/dollarsign.png'
import home from '/src/assets/images/home.png'
import homeassest from '/src/assets/images/assest.png'
import peacesign from '/src/assets/images/peaceful.png'
import star from '/src/assets/images/starhome.png'
import sunny from '/src/assets/images/sunny.png'
import Features from './Features'

export default function Section() {
  return (
    <>
    <section className='py-12 md:py-[93px] w-screen'>
        <Box className='container mx-auto px-10'>
            <Heading data-aos="fade-up" as={'h5'} size={'md'} className='text-center lg:text-left md:text-[2.25rem] leading-[178%] mb-[38px] capitalize'>
            <span className='lg:border-b-[3px] border-b-[#F4511E]'>Minimum Living Cost</span> takes care of everything
            </Heading>
            <Box className='flex items-center'>
                <Image src={Poolhouse} alt='Swimming pool' className='lg:block hidden'/>
                <Box data-aos="zoom-out" className='grid grid-cols-2 grid-cols-3 sm:grid-cols-3 gap-12 lg:gap-y-[92px] gap-x-10 lg:gap-x-1'>
                    <Features title={'Pay as little as possible!'}>
                        <Image src={dollarsign} alt=''/>
                    </Features>
                    <Features title={'Pay as little as possible!'}>
                        <Image src={home} alt=''/>
                    </Features>
                    <Features title={'Pay as little as possible!'}>
                        <Image src={homeassest} alt=''/>
                    </Features>
                    <Features title={'Pay as little as possible!'}>
                        <Image src={peacesign} alt=''/>
                    </Features>
                    <Features title={'Pay as little as possible!'}>
                        <Image src={star} alt=''/>
                    </Features>
                    <Features title={'Pay as little as possible!'}>
                        <Image src={sunny} alt=''/>
                    </Features>
                </Box>
            </Box>
        </Box>
    </section>
    </>
  )
}
