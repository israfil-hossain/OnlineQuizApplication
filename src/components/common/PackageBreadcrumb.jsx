import { Box,} from '@mui/material'
import React from 'react'

const PackageBreadcrumb = ({children}) => {
  return (
    <Box sx={{
        height: 15,
        padding:2,
        textAlign:"center",
        justifyContent:"center",
        marginTop:"5px",
        marginBottom:"20px",
    }}>
        {children}
    </Box>
  )
}

export default PackageBreadcrumb