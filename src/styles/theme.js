import { createMuiTheme } from '@material-ui/core'

const palette = {
    primary: {
        main: 'hsl(180, 66%, 49%)',
        contrastText: 'white',
    },
    secondary: {
        main: 'hsl(257, 27%, 26%)',
        contrastText: 'white',
    }
}
const theme = createMuiTheme({
    palette,
    typography: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: 17,
    },
    breakpoints: {
        values: {
            sm: 618
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '#root .hoverable:hover': {
                    color: palette.primary.main
                }
            }
        },
    }
})


export default theme