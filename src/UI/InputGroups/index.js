import React, { useState, useRef } from 'react'
import { MdErrorOutline } from 'react-icons/md'
import { BiCheckCircle } from 'react-icons/bi'
import { BsEye, BsEyeSlashFill } from 'react-icons/bs'
import Container from './styles'

const FloatingInput = ({
  label,
  style,
  type = 'text',
  placeholder,
  onChange,
  children,
  ...props
}) => {
  const inputContainer = useRef(null)
  const [showPassword, setState] = useState(false)
  return (
    <Container password={type === 'password'} style={style ? style : {}}>
      <div ref={inputContainer}>
        {children ? (
          children
        ) : (
          <React.Fragment>
            <label>{label}</label>
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
                onChange(e)
              }}
              {...props}
              placeholder={placeholder}
            />
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
