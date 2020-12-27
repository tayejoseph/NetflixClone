import ScrollBar from './scrollBar'
import BgMixin from './BgMixin'

export const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

export const topTabHeight = '20px'

const handleGetBreakPoint = (breakPoint) => {
  return BREAKPOINTS[breakPoint] ? `${BREAKPOINTS[breakPoint]}px` : breakPoint
}

export const theme = {
  primary: '#d60e15',
  secondary: '#ffff',
  bgColor: '#f7f7f7',
  maxWidth: '1450px',
  fontFamily: `
  'Caros Text',-apple-system,BlinkMacSystemFont,"Helvetica Neue",
  "Segoe UI","Oxygen","Ubuntu","Cantarell","Open Sans",sans-serif
  `,
  textColor: '#222222',
  minQuery: (breakpoint) =>
    `@media(min-width: ${handleGetBreakPoint(breakpoint)})`,
  maxQuery: (breakpoint) =>
    `@media(max-width: ${handleGetBreakPoint(breakpoint)})`,
  minMaxQuery: (min, max) =>
    `@media(max-width: ${handleGetBreakPoint(
      max,
    )}) and (min-width: ${handleGetBreakPoint(min)})`,
  scrollBaxMixin: ScrollBar,
  bgMixin: BgMixin,
}

export default () => theme
