import {useState, useCallback} from 'react'

const usePay = () => {
    const [payment, setPayment] = useState(false)

    const pay = useCallback(() => {
        setPayment(true)
    }, [])

    const cancelPay = useCallback(() => {
        setPayment(false)
    }, [])

    return {payment, pay, cancelPay}
}

export default usePay