import { createContext } from "react"

function noop() {} //empty function

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: noop,
    logout: noop,
    isAuthenticated: false,
    payments: [],
    isPayment: false,
    pay: noop,
    cancelPay: noop,
    hoursTimer: 1,
    minutesTimer: 2,
    secondsTimer: 3,
})