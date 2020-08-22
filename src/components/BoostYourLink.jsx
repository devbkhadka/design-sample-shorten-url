import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import { RoundedButton } from './buttons'

function BoostYourLink(props) {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Typography className="header" variant="h6">
                Boost your links today
            </Typography>
            <RoundedButton color="primary">
                Get Started
            </RoundedButton>
        </Box>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        background: 'var(--dark-violet)  url(/images/bg-boost-desktop.svg) right',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
        '&>*': {
            margin: '0.5rem'
        },
        '& .header': {
            fontWeight: 'bold'
        }
    }
}))

export default BoostYourLink