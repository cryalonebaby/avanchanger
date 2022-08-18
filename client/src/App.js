import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import useRoutes from './routes'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import usePay from './hooks/pay.hook'
import ScrollToTop from './components/ScrollToTop'

//clear url from query params
let uri = window.location.toString();
if (uri.indexOf("?") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("?"));
    window.history.replaceState({}, document.title, clean_uri);
}


function App() {
	const {token, login, logout, userId} = useAuth()
	const {payment, pay, cancelPay} = usePay()
	const isAuthenticated = !!token // to boolean
	const isPayment = payment
	const routes = useRoutes(isAuthenticated, isPayment)

	return (
		<AuthContext.Provider value={{
			token, login, logout, userId, isAuthenticated, isPayment, pay, cancelPay
		}}>
		<Router>
			<Header
				isAuth={isAuthenticated}
			/>
				<ScrollToTop/>
				{routes}
			<Footer/>
		</Router>
		</AuthContext.Provider>
	)
}

export default App;
