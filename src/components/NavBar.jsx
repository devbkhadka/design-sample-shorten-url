import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { AppBar, Typography, Toolbar, Box } from '@material-ui/core'
import clsx from 'clsx'
import { Menu as MenuIcon } from '@material-ui/icons'
import { RoundedButton, TextButton } from './buttons'


function CustomNavBar({className}) {
    const classes = useStyles()
    const [menuExpanded, setMenuExpanded] = useState(false)

    const toggleMenuExpanded = ()=>{
        setMenuExpanded(!menuExpanded)
    }

    return (
        <AppBar color="inherit" position="static" elevation={0} className={className}>
            <Box className={classes.placeholder}></Box>
            <Toolbar className={classes.toolbar}>
                <Box className="title">
                    <Typography variant="h6">
                        Shortly
                    </Typography>
                    <MenuIcon className="burger-menu" onClick={toggleMenuExpanded}/>
                </Box>
                <Box className={clsx("menu", "expandable", "first", menuExpanded?"expanded":"")}>
                    <TextButton>Features</TextButton>
                    <TextButton>Pricing</TextButton>
                    <TextButton>Resources</TextButton>
                </Box>
                <Box className={clsx("separator", "expandable", menuExpanded?"expanded":"")}>
                    <hr />
                </Box>
                <Box className={clsx("buttons", "expandable", "last", menuExpanded?"expanded":"")}>
                    <TextButton>Login</TextButton>
                    <RoundedButton color="primary">Sign Up</RoundedButton>
                </Box>
                
            </Toolbar>
        </AppBar>
    )
}


const useStyles = makeStyles(theme=>({
    'placeholder': {
        [theme.breakpoints.down('xs')]: {
            height: 64
        }
    },
    'toolbar': {
        justifyContent: "space-between",
        backgroundColor: "white",
        '& .title': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& h6': {
                fontWeight: 'bold'
            }
        },
        '& .menu': {
            flexGrow: 1,
            padding: '0 1rem',
        },
        '& .burger-menu': {
            display: "none",
        },
        '& .separator': {
            display: 'none'
        },
        [theme.breakpoints.down('xs')]: {
            position: 'fixed',
            zIndex: 555,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            '& .title': {
                width: '100%',
                justifyContent: 'space-between',
                height: 64,
            },
            '& .expandable': {
                flexDirection: 'column',
                margin: '0 auto',
                width: '98%',
                maxWidth: 400,
                display: 'none',
                backgroundColor: theme.palette.secondary.dark,
                '&>*': {
                    margin: '0.3rem 2rem',
                },
                '& *': {
                    fontSize: '1.4rem',
                    color: 'white',
                }
            },
            '& .expanded': {
                display: 'inherit'
            },
            '& .expandable.first': {
                paddingTop: '1.4rem',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            },
            '& .expandable.last': {
                paddingBottom: '1.4rem',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
            },
            '& .burger-menu': {
                display: "inline"
            },
        }
    }
    
}))


export default CustomNavBar