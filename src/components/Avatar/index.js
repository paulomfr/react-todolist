import React from 'react';

import { Box } from './Avatar.style';

export default function Avatar({ size, url }) {
  return (
    <Box size={size}>
      <img src={url} alt="" />
    </Box>
  )
}

Avatar.Box = Box;
