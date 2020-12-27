import { useMediaQuery } from 'react-responsive'
import { BREAKPOINTS } from '../base/theme'

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: BREAKPOINTS.lg })
  return isMobile ? children : null
}

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: BREAKPOINTS.lg + 1 })
  return isDesktop ? children : null
}

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}

// import { useMediaQuery } from 'react-responsive'
// import { BREAKPOINTS } from '../base/theme'

// export const Mobile = ({ children }) => {
//   const isMobile = useMediaQuery({ maxWidth: BREAKPOINTS.md })
//   return isMobile ? children : null
// }

// export const Desktop = ({ children }) => {
//   const isDesktop = useMediaQuery({ minWidth: BREAKPOINTS.md + 1 })
//   return isDesktop ? children : null
// }

// export const Tablet = ({ children }) => {
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
//   return isTablet ? children : null
// }
