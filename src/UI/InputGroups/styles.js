import Styled from 'styled-components'
import { lighten } from 'polished'

export default Styled.div`
margin-bottom: 0.8em;
width: 100%;
div {
  position: relative;
  label {
    display: block;
    margin-bottom: 0.5em;
    color: grey;
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
    &::placeholder {
      color: #b2b2b2;
    }
  }
  .validation--icon, .password--icon {
    position: absolute;
    cursor: pointer;
    font-size: 1.5em;
    right: 5px;
    padding: 0px;
    top: 50%;
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
