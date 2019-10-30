import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import 'antd/dist/antd.css';

import Layout from './components/layout/Layout';

class App extends Component {

  	render() {
    	return (
			<Router>
				<Layout {...this.props}>
					<BaseRouter />
				</Layout>
			</Router>
		);
	}
}

export default App;
