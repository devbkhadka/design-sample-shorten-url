import { styled, Button } from '@material-ui/core'
import React from 'react'


const getBaseStyle = ({theme})=> {
    console.log(theme)
    return {
        border: 'none',
        textTransform: 'none',
        margin: '0',
        color: theme.palette.text.secondary,
        '&:hover': {
            background: 'none',
            color: theme.palette.text.primary,
        }
    }
}



export const TextButton = styled((props)=><Button {...props} size="small"/>)(getBaseStyle)


export const RoundedButton = styled((props)=><Button {...props} variant="contained" size="small"/>)(({theme})=>({
    borderRadius: 20,
    paddingLeft: '1rem',
    paddingRight: '1rem',
    textTransform: 'none',
    '&:hover': {
        background: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText
    }
}))
