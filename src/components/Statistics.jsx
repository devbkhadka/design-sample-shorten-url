import React from 'react'
import { Paper, Typography, Grid, Box, makeStyles, Toolbar, styled } from '@material-ui/core'
import clsx from 'clsx'
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import ShortenLink from './ShortenLink';


function Statistics({ className }) {
    const classes = useStyles()
    return <Toolbar className={clsx(classes.root, className)}>
        
        <ShortenLink />
        <Box className="title">
            <Typography variant="h5" style={{fontWeight: 'bold'}}>Advance Statistics</Typography>
            <SmallText>Track how your links are performing across the web with our 
  advanced statistics dashboard.</SmallText>
        </Box>
        <Box className="cards-container">
            <Box className="cards-connector"></Box>
            <Grid container spacing={3} style={{position: 'relative'}}>
                <Grid item sm={4} xs={12}>
                    <Paper className="stat-card">
                        <StyledIcon icon={EqualizerOutlinedIcon} />
                        <Box className="texts">
                            <Typography variant="h6">Brand Recognition</Typography>
                            <SmallText>Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.</SmallText>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Paper className="stat-card">
                        <StyledIcon icon={EqualizerOutlinedIcon} />
                        <Box className="texts">
                            <Typography variant="h6">Brand Recognition</Typography>
                            <SmallText>Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.
</SmallText>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Paper className="stat-card">
                        <StyledIcon icon={EqualizerOutlinedIcon} />
                        <Box className="texts">
                            <Typography variant="h6">Brand Recognition</Typography>
                            <SmallText>Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.
</SmallText>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
        
    </Toolbar>
}

const StyledIcon = ({icon}) => {
    const Icon = styled(icon)(
    ({theme})=>({
        padding: '0.5rem',
        fontSize: '4rem',
        color: theme.palette.primary.main,
        background: theme.palette.secondary.main,
        borderRadius: '2rem',
        position: 'relative',
        left: '1rem',
        top: '-3rem',
    }))
    return <Icon />
}

const SmallText = ({children}) => {
    const Text = styled(Typography)(
        ({theme}) => ({
            color: theme.palette.text.secondary,
        })
    )
    return <Text  variant="caption" children={children}/>
}

const useStyles = makeStyles(theme => ({
    root: {
        margin: '2rem auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& .title': {
            margin: '3rem auto 5rem auto',
            textAlign: 'center',
        },
        '& .stat-card': {
            padding: '1rem 1rem 0 1rem',
            '& .texts': {
                position: "relative",
                top: '-2rem'
            }
        },
        '& .cards-container': {
            position: 'relative',
        },
        '& .cards-connector': {
            background: theme.palette.primary.main,
            position: 'absolute',
        },
        [theme.breakpoints.down('xs')]: {
            '& svg': {
                left: 'auto'
            },
            '& .stat-card': {
                textAlign: 'center',
                marginBottom: '2rem'
            },
            '& .cards-connector': {
                width: '9px',
                height: '80%',
                left: '50%',
                margin: '10% 0',
                marginLeft: '-4px',
            }
        },
        [theme.breakpoints.up('sm')]: {
            '& .MuiGrid-item:nth-child(2)': {
                marginTop: '2rem'
            },
            '& .MuiGrid-item:nth-child(3)': {
                marginTop: '4rem'
            },
            '& .cards-connector': {
                height: '9px',
                width: '80%',
                top: '50%',
                margin: '0 10%',
                marginTop: '-2rem',
            }
        }

    }
}))

export default Statistics 