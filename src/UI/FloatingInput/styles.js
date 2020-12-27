import Styled, { css } from 'styled-components'
import { lighten } from 'polished'

export default Styled.div`
margin-bottom: 0.8em;
width: 100%;
div {
  position: relative;
  label {
    position: absolute;
    font-size: 1rem;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    color: gray;
    padding: 0 0.3rem;
    margin: 0 0.5rem;
    transition: .1s ease-out;
    transform-origin: left top;
    pointer-events: none;
  }
  input, select {
    font-size: 1rem;
    outline: none;
    border: 2px solid grey;
    width: 100%;
    border-radius: 5px;  
    padding: 1rem 0.7rem; 
    ${props =>
      props.password &&
      css`
        padding-right: 2.6em;
      `}
    color: gray;
    font-weight: 200;
    transition: 0.1s ease-out;
  }
  input:focus {
    border-color: ${({ theme }) => lighten(0.2, theme.primary)};  
  }
  input:focus + label {
    color: ${({ theme }) => lighten(0.2, theme.primary)};
    top: 0;
    transform: translateY(-50%) scale(.9);
  }
  input:not(:placeholder-shown) + label {
    top: 0;
    transform: translateY(-50%) scale(.9);
  } 
  .validation--icon, .password--icon {
    position: absolute;
    color: black;
    cursor: pointer;
    font-size: 1.5em;
    right: 11px;
    padding: 0px;
    top: 50%;
    transform: translateY(-50%)
  }
  .validation--icon {
    visibility: hidden;
  }
}

p.error-msg {
  margin: 0px;
  height: 1em;
  text-align: left!important;
  text-transform: capitalize;
  font-size: 0.8em;
  margin-top: 0.2em;
  margin-left: 0.5em
}

  /* error */
  .error input {
    /* border-color: #e74c3c; */
  }
  .error .icon--error {
    color: #e74c3c;
    visibility: visible;
  }
  .error label {
    /* color: #e74c3c; */
  }

  .error + p.error-msg {
    color: #e74c3c;
  }


  /* success */
  .success input {
    /* border-color: #2ecc71; */
  }
  .success .icon--success {
    color: #2ecc71;
    visibility: visible;
  }
  .success label {
    /* color: #2ecc71; */
  }
  .success + p.error-msg {
    color: #2ecc71;
  }


`
