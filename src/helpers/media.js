import {BREAKPOINTS} from "../base/theme"


const handleGetBreakPoint = (breakPoint) => {
    return BREAKPOINTS[breakPoint] ? `${BREAKPOINTS[breakPoint]}px` : breakPoint
}

export const minQuery = breakpoint => {
    return `@media(min-width: ${handleGetBreakPoint(breakpoint)})`
}

export const maxQuery = breakpoint => {
    return `@media(max-width: ${handleGetBreakPoint(breakpoint)})` 
}

export const minMaxQuery = (min, max) => {
    return `@media(max-width: ${handleGetBreakPoint(max)}) and (min-width: ${handleGetBreakPoint(min)})`
} 
