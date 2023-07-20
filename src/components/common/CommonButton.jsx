import React from 'react';
import Button from '@mui/material/Button';

function CommonButton(props) {
  const {color, width, height, className } = props;

  return (
    <Button
      variant="contained"
      color={color || 'primary'}
      
      className={className}
      sx={{ width: width, height: height,color:"white",fontWeight:"medium",
        borderRadius: 'md',
        '&:hover': {
          bgcolor: 'primary.main',
        },}}
      disableElevation
    >
      <span className='xs:text-xs md:text-sm lg:text-xs xl:text-sm'>{props.children}</span>
    </Button>
  );
}

export default CommonButton;
