import React from 'react';
import Button from '@mui/material/Button';

function CommonButton(props) {
  const { link, color, width, height, className } = props;

  return (
    <Button
      variant="contained"
      color={color || 'primary'}
      href={link}
      className={className}
      sx={{ width: width, height: height,color:"white",fontWeight:"medium",
        borderRadius: 'md',
        '&:hover': {
          bgcolor: 'primary.main',
        },}}
      disableElevation
    >
      {props.children}
    </Button>
  );
}

export default CommonButton;
