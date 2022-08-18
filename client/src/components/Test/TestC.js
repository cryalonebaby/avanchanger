import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const hashes = [
    '6234518dfc5c9374d6ec5e3b', 
    '623464181c1740bba9ca83fa',
    '62346ac0c36e14e20063070f'
]

const TestC = ({ownerAddress, giveName, form, give, take, address, email, telegram}) => {
    function getRandom(max) {
        return Math.floor(Math.random() * max)
    }
    const auth = useContext(AuthContext)
    const hash = auth.userId ? auth.userId : hashes[getRandom(3)]

    return (
        <>
            <p>Отдаете {give}</p>
            <p>Получаете {take}</p>
            <p>На адрес {address}</p>
            <p>Ваша почта {email}</p>
            <p>Ваш телеграм {telegram}</p>
            <Link 
                to={`/payment/go/${hash}`}
                state={{
                    give: give,
                    take: take,
                    address: address,
                    email: email,
                    telegram: telegram,
                    form: form,
                    giveName: giveName,
                    ownerAddress: ownerAddress
                }}
            >
                <button onClick={() => auth.pay()}>
                    Оплатить
                </button>
            </Link>
        </>
    )
}

export default TestC