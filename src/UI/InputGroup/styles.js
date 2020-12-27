import styled from 'styled-components'
import { lighten } from 'polished'

export default styled.div.attrs({
  className: 'input-group',
})`
  width: 100%;
  margin-bottom: 20px;
  ${props =>
    props.row &&
    `
    display: flex;
  flex-direction: row;
  justify-content: space-between;
    div {
     flex-basis: 48%;
   }
  `}
  
  label {
    display: block;
    margin-bottom: 0.5em;
    color: grey;
  }
  select {
    /* padding: 0.4em;
    border-radius: 5px;
    background-color: #fbfaf9;
    border-color: #f3f2f2;
    font-size: 1.4em;
    text-align: center;
    text-align-last: center;
    box-shadow: 0px 0px 1px grey; */
  }
  input, select {
    padding: 0 1.25em;
    background: #FFFFFF;
    border: 1px solid #AEAEAE;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
    
  display: inline-block;
    height: 2.5rem;
    &:focus {
      outline: none;
        border: 2px solid ${({ theme }) => lighten(0.3, theme.primary)};
      }
    &:invalid {
      background: #FFFFFF;
      border: 2px solid #e50101;
    }
    &::placeholder {
      color: #b2b2b2;
    }
  }
  textarea {
    height: 12rem; 
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #b4b4b4;
    border-radius: 5px;
    padding: 1rem;
    resize: none;
    &::placeholder {
      color: #b2b2b2;
    }
    &:focus {
      outline: none;
        border: 2px solid ${({ theme }) => lighten(0.3, theme.primary)};
      }
  }
}
`
