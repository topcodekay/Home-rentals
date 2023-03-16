import React from 'react'
import home from '/src/assets/images/homelogo.png'
import {Box, Image, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import navigation from '../Navigation';
import Home from './HomePage';
import NavMenu from './NavMenu';

export default function Header() {
  const navbar : any = navigation()
  return (
    <>
      <Box className='w-screen h-[80px] z-10 overflow-hidden'>
      <Box className='w-full h-full fixed'>
        <Box className='flex justify-between md:justify-between sm:justify-around items-center sm:items-center border-b-2 mx-24'>
          <Image src={home} alt='rental logo' w={'147px'} h={'50px'}/>
          <UnorderedList className='hidden md:flex text-white mr-96 font-medium font-dm-sans text-lg'>
            <ListItem className='active'>
              <Home/>
            </ListItem>
            {navbar.map((nav: any) => (
                      <ListItem key={nav.title}>
                        <Link href={"#"}>{nav.title}</Link>
                      </ListItem>
            ))}
          </UnorderedList>
          <NavMenu/>
        </Box>
      </Box>
      </Box>
    </>
  )
}
