import { createMuiTheme } from '@material-ui/core/styles';

const tColors = {
    text: {
        dark: '#252b33',
        light: '#51555c',
    },
    grey: {
        light: '#f5f5f5',
        mediumLight: '#acaeba',
        medium: '#646f82',
        mediumDark: '#495260',
        dark: '#323841',
    },
    
    green: '#38bd4b',
    orange: '#ffa91a',
    red: '#f53e3e',
    pink: '#E61B63',
    lightGrey: '#51555C',
    
    newBlue: '#11BBDD',
    deepSea: '#1167AF',
    outerSpace: '#0D2149',
    
}


const headingFont = {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    lineHeight: '1.2',
    fontWeight: 700,
    color: tColors.text.dark,
    letterSpacing: 1,
}

const bodyFont = [
    'Open Sans',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
].join(',');

const theme = createMuiTheme({
    softBorder: '1px solid rgba(0,0,0,0.12)',
    contentWidth: 1100,
    palette: {
        primary: {
            main: '#E61B63'
        },
        background: {
            surface: tColors.grey.light,
        },
        charcoal: '#1D252D',
    },
    typography: {
        useNextVariants: true,
        fontFamily: bodyFont,
        fontWeightMedium: 500,
        h1: {
            ...headingFont,
            fontSize: "4.25rem",
        },
        h2: {
            ...headingFont,
            fontSize: "1.75rem",
        },
        h3: {
            ...headingFont,
            fontSize: "1.5rem",
        },
        h4: {
            ...headingFont,
            fontSize: "1.125rem",
        },
        h5: {
            ...headingFont,
            fontSize: "1.125rem",
            lineHeight: '1.35',
        },
        h6: {
            ...headingFont,
            fontSize: "1rem",
            lineHeight: '1.35',
        },
        body1: {
            fontSize: '1rem',
            letterSpacing: '0',
            color: tColors.text.dark,
            fontWeight: 500,
        },
        body2: {
            fontSize: '1rem',
            color: tColors.text.light,
        },
        button: {
            textTransform: 'none',
        },
    },
    overrides: {
        MuiInputBase: {
            root: {
                background: 'white',
            }
        },
        MuiButton: {
            root: {
                borderRadius: 0,
            },
            label: {
                fontWeight: 600
            },
        },
        MuiDialog: {
            root: {
                fontFamily: bodyFont
            },
            paperFullScreen: {
                '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '4px',
                    background: 'linear-gradient(90deg, #1bd 0%, #1bd 33.999%, #1167AF 34%, #1167AF 65.999%, #FF206E 66%)',
                }
            }
        }
    },
});
console.log('theme', theme)
export default theme;
