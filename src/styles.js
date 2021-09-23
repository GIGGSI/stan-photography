import { css } from 'styled-components';
export const setColor = {
    primaryColor: "#cd853f;",
    mainWhite: "#fff",
    mainBlack: '#222',
    mainGray: '#ececec',
    lightGray: '#f7f7f7',
    gray: '#666666'
}

export const setFont = {
    main: "font-family:'Montserrat'",
    slanted: "font-family:'Cherish', cursive",
}


export const setFlex = ({ x = "center", y = "center" }) => {
    return `display:flex;align-items:${y};justify-content:${x}`
}

// set mobile size
const sizes = {
    large: 1200,
    desktop: 992,
    tablet: 768,
    phone: 576
}

export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em){
        ${css(...args)}
    }
    `
    return acc
}, {});
