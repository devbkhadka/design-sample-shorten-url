import React from 'react'
import { Box, TextField, Button, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import ShortenedLink from './ShortenedLink'


function ShortenLink({ className }) {
    const classes = useStyles()
    return (
        <>
            <Box display="flex" className={clsx(className, classes.root)}>
                <TextField error className="enter-link" fullWidth placeholder="shorten a link here..." variant="outlined"></TextField>
                <Button color="primary" variant="contained">Shorten It!</Button>
            </Box>
            <ShortenedLink />
            <ShortenedLink />
            <ShortenedLink />
        </>
    )
}

const useStyles = makeStyles(theme=>({
    root: {
        marginTop: '-5.8rem',
        padding: '1rem',
        width: '100%',
        background: 'var(--dark-violet) url(/images/bg-shorten-desktop.svg) right',
        backgroundSize: 'cover',
        borderRadius: '10px',
        '&>*':{
            margin: '0.5rem',
            textTransform: 'none'
        },
        '& button': {
            minWidth: 120
        },
        '& .MuiInputBase-root': {
            background: 'white',
            // padding: '0.8rem'
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0.5rem',
        }

    }
}))

export default ShortenLink

