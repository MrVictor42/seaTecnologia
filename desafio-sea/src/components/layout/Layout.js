import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

import '../../custom.css';
import retangule from '../svgs/retangule.svg';
import miniRetangule from '../svgs/miniRetangule.svg';
import miniminiRetangule from '../svgs/miniminiRetangule.svg';
import userIcon from '../svgs/userIcon.svg';
import ContentLeft from '../content/ContentLeft';
import ContentUp from '../content/ContentUp';

const { Content, Sider } = Layout;

class CustomLayout extends Component {

	constructor(props) {
		super(props);
		this.state = {
			concluido: false
		};
		this.updateState = this.updateState.bind(this);
	}

	updateState() {
		this.setState({
			concluido: !this.state.concluido
		});
	}

	render() {
		return (
			<Layout className = 'layout'>
				<Sider
					className = 'sider'
					width = '57px'
				>
					<Menu className = 'iconMenuUp'>
						<img src = { retangule } className = 'retanguleIconFirst' alt = '' />
						<Icon type = 'bank' className = 'iconMenuFirst'/>
						<img src = { retangule } className = 'retanguleIconSecond' alt = ''/>
						<Icon type = 'edit' className = 'iconMenuSecond'/>
						<img src = { miniRetangule } className = 'miniRetangule' alt = ''/>
						<img src = { retangule } className = 'retanguleIconThird' alt = ''/>
						<Icon type = 'apartment' className = 'iconMenuThird'/>
						<img src = { retangule } className = 'retanguleIconFourth' alt = ''/>
						<Icon type = 'bell' className = 'iconMenuFourth'/>
						<img src = { miniminiRetangule } className = 'miniminiRetangule' alt = ''/>
						<Icon type = 'audit' className = 'iconMenuFiveth'/>
						<img src = { retangule } className = 'retanguleIconFiveth' alt = ''/>
						<Icon type = 'rollback' className = 'iconMenuSixth'/>
						<img src = { retangule } className = 'retanguleIconSixth' alt = ''/>
						<Icon type = 'user' className = 'iconMenuSeventh'/>
					</Menu>
				</Sider>
				<Layout>

					<Content className = 'contentLeft'>
						<ContentLeft/>
						<img src = { userIcon } className = 'logo' alt = ''/>
					</Content>
					<Content className = 'contentUp'>
						<ContentUp />
					</Content>

					{ this.props.children }
				</Layout>
			</Layout>
		);
	}		
}

export default CustomLayout;