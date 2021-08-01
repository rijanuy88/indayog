import { createTheme } from "@material-ui/core";

const boldstrom = {
    fontFamily: 'Boldstrom',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 800,
    src: `
        src: 
        local('Boldstrom'), 
        url(./Assets/Fonts/Boldstrom\ D.otf) format('otf');
    `,
};
const monteserrat = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    src: 
    local('Montserrat'), 
    url(./Assets/Fonts/Montserrat-Regular.otf) format('otf');
    `,
};

const america = {
    fontFamily: 'America',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    src: 
    local('America'), 
    url(./Assets/Fonts/Hello\ America\ Demo.otf) format('otf');
    `,
};
const theme = createTheme({
    typography: {
        fontFamily: 'Boldstrom, Monteserrat, America',
    },
    overrides: {
        MuiCssBaseline: {
        '@global': {
            '@font-face': [boldstrom],
            '@font-face':[monteserrat],
            '@font-face':[america],
        },
        },
    },
});