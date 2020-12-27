import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export default styled.button`
  &:disabled {
    cursor: no-drop;
  }
  ${props => css`
    padding: 12px 28px;
    user-select: none;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    width: ${props.full ? '100%' : 'fit-content'};
    display: ${props.full ? 'block' : 'inline-block'};
    border-radius: ${props.rounded ? '100px' : '5px'};
    box-shadow: ${props.hasShadow ? '0 0 16px rgba(0,0,0,.2)' : 'none'};
    outline: none;

    ${({ theme }) => theme.maxQuery('lg')} {
      padding: 0.5em 1em;
    }

    ${props.primary &&
    css`
      border: 2.2px solid ${props.theme.primary};
      background-color: ${({ theme }) => theme.primary};
      color: #fff;
      &:hover,
      &:focus {
        &:not([disabled]) {
          background: ${lighten(0.1, props.theme.primary)};
          border-color: ${lighten(0.1, props.theme.primary)};
        }
      }
    `}
    ${props.secondary &&
    css`
      border: 1.5px solid !important;
      border-color: ${lighten(0.1, props.theme.primary)};
      background: ${props.theme.secondary};
      color: ${props.theme.primary};
      &:hover,
      &:focus {
        &:not([disabled]) {
          background: ${lighten(0.1, props.theme.primary)};
          border-color: ${lighten(0.1, props.theme.primary)};
          color: white;
        }
      }
    `}

    ${props.tertiary &&
    css`
      border-color: #fff;
      background: #fff;
      color: ${props.theme.primary};
      &:hover,
      &:focus {
        &:not([disabled]) {
          background: #fff;
          color: ${props.theme.primary};
          border-color: #fff;
        }
      }
    `}
    ${props.bordered &&
    css`
      background-color: transparent;
      color: #fff;
      border: 2.2px solid ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.primary};
      &:hover,
      &:focus {
        &:not([disabled]) {
          color: ${lighten(0.1, props.theme.primary)};
          border-color: ${lighten(0.1, props.theme.primary)};
          background-color: transparent;
        }
      }
    `}
    ${props.small &&
    css`
      padding: 0.5em 1em;
    `}
    ${props.icon &&
    css`
      padding: 0px;
      margin: 0px;
      display: flex;
      align-items: center;
      .icon {
        font-size: 20px;
        margin: 0 0.5em;
      }
    `}
    ${props.loading &&
    css`
      padding-top: 0.5em;
      padding-bottom: 0.5em;
    `}
    ${props.icon &&
    css`
      border: none;
      background: transparent;
      &:hover,
      &:focus {
        &:not([disabled]) {
          background: transparent;
          border-color: transparent;
        }
      }
    `}
  `}
`
