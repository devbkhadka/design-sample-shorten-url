import React from 'react'
import { Box, Typography, Button, makeStyles } from '@material-ui/core'
import clsx from 'clsx'


function ShortenedLink({className}) {
    const classes = useStyles()
    return (
        <Box display='flex' className={clsx(className, classes.root)}>
            <Box flexGrow={1}>
                <Typography variant="caption" >
                    https://frontendmentor.io
                </Typography>
            </Box>
            <Box>
                <Typography variant="caption" color="primary">
                    https://rel.ink/s3kjk
                </Typography>
            </Box>
            <Box>
                <Button variant="contained" color="primary">
                    Copy
                </Button>
            </Box>
        </Box>
    )
}

const useStyles = makeStyles(theme=>({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem',
        marginTop: '1rem',
        background: 'white',
        borderRadius: '10px',
        width: '100%',
        '&>*': {
            padding: '0.3rem 1rem'
        },
        '&>*:first-child':{
            color: theme.palette.text.secondary
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'start',
            '&>*, button': {
                width: '100%'
            },
            '&>*:first-child': {
                borderBottom: 'solid 1px var(--grey)',
                marginBottom: '0.3rem',
                paddingBottom: '0.6rem',
            }
        }
    }
}))


export default ShortenedLink
