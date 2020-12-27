import React from 'react'
import Container from './style'
import Spinner from '../Spinner'

const Button = ({
  disabled = false,
  loading = false,
  primary = true,
  secondary,
  tertiary,
  full,
  style,
  small,
  type = 'button',
  className,
  rounded,
  icon,
  bordered,
  hasShadow,
  onClick,
  children,
}) => {
  return (
    <Container
      className={`btn ${className ? className : ''}`}
      icon={icon ? icon : undefined}
      disabled={disabled ? disabled : loading ? true : false}
      primary={primary}
      secondary={secondary ? secondary : undefined}
      tertiary={tertiary ? tertiary : undefined}
      rounded={rounded ? rounded : undefined}
      hasShadow={hasShadow ? hasShadow : undefined}
      bordered={bordered ? bordered : undefined}
      full={full ? full : undefined}
      small={small ? small : undefined}
      onClick={onClick}
      loading={loading ? JSON.stringify(loading) : undefined}
      type={type}
      style={style}
    >
      {loading ? <Spinner /> : children}
    </Container>
  )
}
export default Button
