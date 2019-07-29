import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
const Home = () => {
	return (
		<div className="wrapper">
			<Navbar />
			<Header />
			<div className="wrapper-overlay">
			</div>
		</div>
	)
}

export default Home