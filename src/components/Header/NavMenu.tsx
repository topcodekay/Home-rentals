import { Box, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Link, ListItem, UnorderedList, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import navigation from '../Navigation'
import Home from './HomePage'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function NavMenu() {
    const navbar : any = navigation()
    const {isOpen, onOpen, onClose} = useDisclosure()
  return (
    <>
    <Box className='lg:hidden md:hidden sm:block'>
        <Box onClick={onOpen}>
            <GiHamburgerMenu/>
        </Box>
    </Box>
    <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay/>
        <DrawerContent>
        <DrawerBody>
            <UnorderedList className='flex flex-col'>
                <ListItem className='active'>
                    <Home/>
                </ListItem>
                {navbar.map((nav: any) => (
                      <ListItem key={nav.title}>
                        <Link href={"#"}>{nav.title}</Link>
                      </ListItem>
                ))}
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
  )
}
