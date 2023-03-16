import { Box } from '@chakra-ui/react'
import React from 'react'

export default function InputWrapper({children, autoclass} : any) {
  return (
    <>
    <Box className={autoclass}>
        <label className='label-style after:ml-1'></label>
            {children}
    </Box>
    </>
  )
}
