import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Testimonies({content, img, name, position} : any) {
  return (
    <>
    <Box>
    <article className='text-lg md:text-xl mb-[26px] w-full'>{content}</article>
            <Box className='flex gap-5 mb-10 md:mb-[75px]'>
                <Box className='rounded-full border-2 border-orange h-[61px] w-[61px] overflow-hidden'>
                    <Image src={img} alt="" className='w-full' />
                </Box>
                <article className='flex flex-col justify-between'>
                    <Heading as={'h4'} className='text-lg font-bold leading-9 text-orange'>{name}</Heading>
                    <Text>{position}</Text>
                </article>
            </Box>   
    </Box>
    </>
  )
}
