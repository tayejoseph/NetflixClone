import Styled from 'styled-components'
import bgImg from '../../asset/NG-en-20201221-popsignuptwoweeks-perspective_alpha_website_large.jpg'
import { minQuery, maxQuery } from '../../helpers'

export default Styled.div`
    background-color: #0e0b0c;
    color: #737373;
    ${minQuery('lg')} {
        background-image: url(${bgImg});

    }
    header {
        height: 100px;
        background: red;
    }
    main {
        padding: 1.2em;
        padding-bottom: 8em;
        ${minQuery('lg')} {
            width: 450px;
            background-color: rgba(0,0,0,.75);
            position: relative;
            left: 50%;
            margin-bottom: 5.5em;
            padding: 3em 4em 4em;
            transform: translateX(-50%);
        }
        h1 {
            color: #fff;
            margin-bottom: 1em;
        }
        .row {
            margin-top: 0.8em;
            display: flex;
            justify-content: space-between;
            align-items: center;
            input {
                margin-right: 0.5em;
            }
        }
        .socials {
            display: flex;
            margin: 2em 0px;
            align-items: center;
            .icon {
                color: #313d4f;
                font-size: 1.5em;
                margin-right: 0.5em;
            }
        }
        .new__users {
            a {
                color: #fff;
            }
        }
    }
    footer {
        max-width: 992px;
        margin: auto;
        position: relative;
        padding: 1.5em 1em 2em;
        border-top: 1px solid #474d47;
        ${minQuery('lg')} {
            border: none;
            &:before {
                content: "";
                height: 100%;
                position: absolute;
                top: 0px;
                width: 200vw;
                left: -100vw;
                background-color: rgba(0,0,0,.75)
            }
        }
        ol, p {
            position: relative;
            z-index: 1;
        }
        ol {
            list-style: none;
            margin: 0px;
            position: relative;
            display: grid;
            margin: 1.5em 0px 2em;
            ${maxQuery('lg')} {
                grid-template-columns: auto auto;
            }
            ${minQuery('lg')} {
                grid-template-columns: repeat(4, auto);
            }
            li {
                font-size: 0.9em;
                padding: 0.5em 0px;
                display: block;
            }
        }
    }
        
    

`
