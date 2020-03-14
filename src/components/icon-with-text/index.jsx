import React from 'react'
import { Box } from '@material-ui/core'

const IconWithText = ({ icon, text }) => (
  <Box alignItems="center" display="flex">
    <Box>{icon}</Box>
    <Box>{text}</Box>
  </Box>
)

export default IconWithText
