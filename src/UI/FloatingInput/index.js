import React, { useState, useRef } from 'react'
import { MdErrorOutline } from 'react-icons/md'
import { BiCheckCircle } from 'react-icons/bi'
import { BsEye, BsEyeSlashFill } from 'react-icons/bs'
import Container from './styles'

const FloatingInput = ({
  label,
  type = 'text',
  placeholder,
  onChange,
  children,
  ...props
}) => {
  const inputContainer = useRef(null)
  const [showPassword, setState] = useState(false)
  return (
    <Container password={type === 'password'} className="floating-input">
      <div ref={inputContainer}>
        {type === 'select' ? (
          <React.Fragment>
            {label && <label>{label}</label>}
            <select
              {...props}
              onChange={e => {
                inputContainer.current.nextSibling.innerHTML = ''
                if (typeof onChange === 'function') onChange(e)
              }}
            >
              {children}
            </select>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <input
              type={
                type !== 'password'
                  ? type
                  : type === 'password' && showPassword
                  ? 'text'
                  : 'password'
              }
              onChange={e => {
                inputContainer.current.className = ''
                inputContainer.current.nextSibling.innerHTML = ''
                if (typeof onChange === 'function') onChange(e)
              }}
              {...props}
              placeholder={placeholder ? placeholder : label}
            />
            <label>{label}</label>
            {type === 'password' ? (
              <React.Fragment>
                {showPassword ? (
                  <BsEye
                    role="button"
                    className={'password--icon'}
                    onClick={() => setState(false)}
                  />
                ) : (
                  <BsEyeSlashFill
                    role="button"
                    className={'password--icon'}
                    onClick={() => setState(true)}
                  />
                )}
              </React.Fragment>
            ) : (
              <React.Fragment>
                <MdErrorOutline className={'validation--icon icon--error'} />
                <BiCheckCircle className={'validation--icon icon--success'} />
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
      <p className="error-msg" />
    </Container>
  )
}

export default FloatingInput
