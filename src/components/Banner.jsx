import React from 'react'
import { makeStyles, Typography, Toolbar } from '@material-ui/core'
import { Box } from '@material-ui/core'
import clsx from 'clsx'
import { RoundedButton } from './buttons'


const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        width: '100%',
        '&>.background':{
            marginTop: '2rem',
            marginBottom: '6rem',
            height: 300,
            width: '100%',
            background: 'url(/images/illustration-working.svg) no-repeat right -3rem center',
            backgroundSize: 'contain'
        },
        '& .statement':{
            paddingTop: '2rem',
            paddingBottom: '6rem',
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
            '& button': {
                marginTop: '1rem'
            }
        },
        '& .content': {
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'start',
            background: 'transparent',
            '& h4': {
                fontWeight: 'bold',
            }
        },
        [theme.breakpoints.down('xs')]: {
            position: 'static',
            '&>.background':{
                marginTop: '1rem',
                marginBottom: '1rem',
            },
            '& .statement':{
                position: 'static',
                height: 'auto',
            },
            '& .content': {
                width: '100%',
                alignItems: 'center',
            }
        },
    },
}))

function Banner({className}) {
    const classes = useStyles()
    return (
        <Box className={clsx(classes.root, className)}>
            <Box className="background">
                
            </Box>
            <Box className="statement app-gutter">
                <Toolbar className='content' elevation={0}>
                    <Typography variant="h4">More than just shorter links</Typography>
                    <Typography variant="caption" color="textSecondary">Build your brand’s recognition and get detailed insights on how your links are performing.</Typography>
                    <RoundedButton color="primary">Get Started</RoundedButton>
                </Toolbar>
            </Box>
        </Box>
    )
}


export default Banner


