import { createMuiTheme } from '@material-ui/core/styles';

export const createTheme = () => {
    const palette = JSON.parse(localStorage.getItem('pallete'));
    console.log({ palette});
    const theme = createMuiTheme({
        '*': {
            fontFamily: '"sofia-pro", "Roboto", "Helvetica", "Arial", "sans-serif"',
        },
        typography: {
            fontFamily: '"sofia-pro", "Roboto", "Helvetica", "Arial", "sans-serif"',
        },
        palette: palette 
        ? palette 
        : {
            primary: {
                dark: '#305E9A',
                main: '#003287',
                light: '#00000046',
            },
            secondary: {
                dark: '#fff',
                main: '#FFDC00',
                light: '#ffeb3b',
                orange: '#FF963C',
            },
            text: {
                primary: '#414141',
                secondary: '#5A5A5A'
            },
            gray: {
                light: "#B5B2B2",
            },
            notyf: {
                border: '#7f6b73',
                primary: '#FE7069'
            },
            firstGradient: {
                primary: '#614CD4',
                secondary: '#FF8B85',
            }
        },
    })
    return {
        ...theme,
    }
}

const mainTheme = createTheme();
export default mainTheme