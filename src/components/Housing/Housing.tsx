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


       // Displaying the pagination buttons 
    let i = 0; 
    while(i < pageLength) {
        listPage.push(<button key={i} onClick={handleClick} data-id={i+1} className={`pagination ${i+1 === currentPage ? 'active-page' : ''}`}>{i + 1}</button>)
        i++
    }

    //function to scroll to the top of page container
    // function scrollTop (){
    //     window.scrollTo({
    //         top: pageContainer.current.offsetTop ,
    //     })
    // }

    // Moving to a particular page clicked
    function handleClick(e : any){
        setCurrentPage(parseInt(e.target.getAttribute('data-id')))
        // scrollTop()
    }

    //Moving to the first page
    function moveToFirstPage(){
        setCurrentPage(1)
        // scrollTop()
    }

    //Moving to the next page
    function nextPage(){
        setCurrentPage(currentPage + 1)
        // scrollTop()
    }



  return (
    <>
    <Box className='py-12 md:py-[93px] bg-[#F5F5F5] w-screen'>
        <Box className='container mx-auto px-12'>
            <Box className='flex justify-between items-end mb-10 md:mb-[69px]'>
                <Heading as={'h4'} className='text-lg md:text-[36px] font-[800] leading-[178%] after:content-[""] after:block after:h-[3px] after:bg-orange after:w-[30%]'> <span className='border-b-[#F4511E]'>List</span> of properties</Heading>
                <Button backgroundColor={'#F4511E'} h={'65px'} color={'#fff'} className='capitalize'>View all properties</Button>
            </Box>
            <Box  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[33px] gap-y-[61px] mb-[109px]'>
                {house4rent}
            </Box>
        </Box>
        <Box className='w-fit mx-auto rounded-md border-2 overflow-hidden border-[muted] bg-white text-[orange] text-center font-bold tracking-[0.1px] shadow-[0px_2px_4px_rgba(0,0,0,0.1)]'>
                        <Button onClick={moveToFirstPage} disabled={currentPage == 1 ? true : false} className='disabled:bg-[#F3F3F3] disabled:text-[muted] px-3 py-[25px] sm:p-[25px] border-r border-r-[muted] rounded-l-md'>First</Button>
                        {listPage}
                        <Button onClick={nextPage} disabled={currentPage == pageLength ? true : false} className='disabled:bg-[#F3F3F3] disabled:text-[muted] px-3 py-[25px] sm:p-[25px] border-l border-l-[muted]'>Next</Button>
                    </Box>
    </Box>
    </>
  )
}
