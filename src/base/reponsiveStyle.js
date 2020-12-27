import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    .row {
        display: flex;
        flex-direction: column;
        align-items: center;
        ${({ theme }) => theme.minQuery('md')} {
            flex-direction: row;
            & > div {
                width: 100%;
            }
            & > :not(:last-child) {
                margin-right: 1em;
            }
        }
    }
`
