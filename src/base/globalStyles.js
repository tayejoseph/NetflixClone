import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export default createGlobalStyle`
  ${normalize()};
  * {
    box-sizing: border-box;
    img {
      user-select: none;
    }
  }
  h1, h2, h3 {
    margin: 0px;
  }
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
     scroll-behavior: smooth;
    ${({ theme }) => theme.maxQuery('lg')} {
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
  
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 16px;
    font-weight: 150;
    ${({ theme }) => theme.maxQuery('lg')} {
        ::-webkit-scrollbar {
          display: none;
        }
    }
    max-width: 100vw;
    overflow-x: hidden !important;
    background-color: ${({ theme }) => theme.bgColor};

    &.no-scroll {
      overflow-y: hidden!important;
    }
    
    label {
      user-select: none;
    }
    
    :focus {
      outline-width: 0.2em;
      outline-style: dashed;
      outline-color: ${({ theme }) => theme.primary};
    }
    [type='text'],
    [type='password'],
    [type='search'],
    [type='tel'],
    [type='email'],
    [type='checkbox'] {
      &:focus {
        outline-color: transparent;
      }
      &:requi${({ theme }) => theme.primary},
      &:invalid {
        box-shadow: none;
      }
      &::placeholder {
        color: rgb(189,189,189);
      }
    }
    button,
    [role='button'],
    [type='submit'] {
      appearance: none;
      cursor: pointer;
      outline-color: transparent;
    }
    a {
      text-decoration: none;
      &:focus {
        color: ${({ theme }) => theme.primary}!important;
        // outline: 2px solid ${({ theme }) => theme.primary};
      }
    }
    input:-webkit-autofill {
      color: transparent !important;
      background-image: none !important;
      background-color: #fff !important;
      -webkit-text-fill-color: rgba(61, 21, 95, .7) !important;
    }
    #app {
        -webkit-overflow-scrolling: touch;
    }
    img {
      user-select: none;
      width: 100%;
    }
    a {
      text-decoration: none;
    }
    ul, ol {
        list-style-type: none;
        padding: 0;
    } 
    hr {
      border: none;
      height: 1px;
      background-color: #e5e5e5;
    }
    [tabindex='0']:focus {
      outline: 1px solid black;
    }
  }

`
