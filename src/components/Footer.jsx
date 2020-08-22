import React from 'react'
import { Grid, Typography, makeStyles, Box } from '@material-ui/core'
import clsx from 'clsx'
import {Facebook, Twitter, Pinterest, Instagram} from '@material-ui/icons'


function Footer({ className }) {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Grid spacing={1} container className={clsx(className, classes.grid)}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">
                        Shortly
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography className="title" variant="caption">
                        Features
                    </Typography>
                    <Typography className="hoverable item" variant="caption">
                        Link shortening
                    </Typography>
                    <Typography className="item hoverable" variant="caption">
                        Branded links
                    </Typography>
                    <Typography className="item hoverable" variant="caption">
                        Analytics
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography className="title" variant="caption">
                        Resources
                    </Typography>
                    <Typography className="item hoverable" variant="caption">
                        Blog
                    </Typography>
                    <Typography className="item hoverable" variant="caption">
                        Developer
                    </Typography>
                    <Typography className="item hoverable" variant="caption">
                        Support
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography className="title" variant="caption">
                        Company
                    </Typography>
                    <Typography className="item hoverable" variant="caption">
                        About
                    </Typography>
                    <Typography className="item hoverable" variant="caption">
                        Our Team
                    </Typography>
                    <Typography className="item hoverable" variant="caption">
                        Careers
                    </Typography>
                    <Typography className="item hoverable" variant="caption">
                        Contacts
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Box className='social-icons'>
                        <Facebook className="hoverable"></Facebook>
                        <Twitter className="hoverable"></Twitter>
                        <Pinterest className="hoverable"></Pinterest>
                        <Instagram className="hoverable"></Instagram>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        background: 'var(--black-violet)',
        display: 'flex',
        justifyContent: 'center',
        padding: '2rem'
    },
    grid: {
        color: 'white',
        '&>*': {
            display: 'flex',
            flexDirection: 'column'
        },
        '& .title': {
            fontWeight: 'bold'
        },
        '& .item': {
            color: 'var(--inverse-text-dark)'
        },
        '& .social-icons': {
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0 1rem',
            '&>svg': {
                fontSize: '1rem'
            }
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            '& .social-icons': {
                justifyContent: 'center',
            }
        }
    }
}))

export default Footer