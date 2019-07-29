import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import About from './pages/about'
// import Blog from './pages/blog'
// import Contact from './pages/contact'
// import Portfolio from './pages/portfolio'
// import Resume from './pages/resume'


import Home from './pages/home'

const Routers = () => {
	return (
		<Router>
			<Route path="/" component={Home} />
			{/* <Route path="/about" exact component={About} />
			<Route path="/blog" exact component={Blog} />
			<Route path="/contact" exact component={Contact} />
			<Route path="/home" exact component={Home} />
			<Route path="/portfolio" exact component={Portfolio} />
			<Route path="/resume" exact component={Resume} /> */}
		</Router>
	)
}

export default Routers