import { createTheme } from "@material-ui/core";

export default createTheme({
    typography: {
        // inimport ko sila using your index.css
        fontFamily: ['Boldstrom', 'Monteserrat', 'America'].join(','),

        // change mo lang dito gusto mong settings ng each type of typography
        // then mag automatically change na sya for all of the Typography components sa
        // code mo.
        h1: {
            fontFamily: 'Boldstrom',
        },
        h2: {
            fontFamily: 'Boldstrom',
        },
        h3: {
            fontFamily: 'Boldstrom',
            fontSize: '2rem'
        },
        h4: {
            fontFamily: 'Montserrat',
            fontWeight: 800,
            fontSize: '1.5rem'
        },
        h5: {
            fontFamily: 'Montserrat',
            fontSize: '1rem'
        },
        h6: {
            fontFamily: 'Montserrat',
        },
        body1: {
            fontFamily: 'Montserrat',
        },
    },
});