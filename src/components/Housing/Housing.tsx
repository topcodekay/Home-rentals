import React, { useState, useRef} from 'react'
import { Box, Button, Heading } from '@chakra-ui/react'
import rent from '../localApi/rent';
import HouseCard from './HouseCard';

export default function Housing() {
    const house = rent()
      // Maximum no of apartment in a page
      const pageLimit = 6
      //Set state of current page
      const [currentPage, setCurrentPage] = useState(1);
      const pageContainer = useRef()
      //Calculate the total number of pages
      const pageLength = Math.ceil(house.length / pageLimit)
      const listPage = []

      const house4rent = house.map((item, index) => {
        const {id, title, type, cost, room, bath, size, img} = item
        if(index >= ((currentPage -1) * pageLimit) && index < (currentPage * pageLimit)) {
            return (
                <HouseCard
                key={id}
                title={title}
                type={type}
                cost={cost} 
                rooms={room} 
                shower={bath} 
                size={size} 
                pic={img} 
                />
            )
        }
      })



  return (
    <>
    <Box className='py-12 md:py-[93px] w-screen'>
        <Box className='container mx-auto px-12'>
            <Box className='flex justify-between items-end mb-10 md:mb-[69px]'>
                <Heading as={'h4'} className='capitalize'> <span className='border-b-[#F4511E]'>List</span> of properties</Heading>
                <Button backgroundColor={'#F4511E'} h={'65px'} color={'#fff'} className='capitalize'>View all properties</Button>
            </Box>
            <Box  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[33px] gap-y-[61px] mb-[109px]'>
                {house4rent}
            </Box>
        </Box>
    </Box>
    </>
  )
}
