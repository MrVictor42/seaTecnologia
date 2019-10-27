import React, { Component } from 'react';
import { Layout, Menu, Button, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import '../../custom.css';
import retangule from '../svgs/retangule.svg';
import miniRetangule from '../svgs/miniRetangule.svg';
import miniminiRetangule from '../svgs/miniminiRetangule.svg';
import userIcon from '../svgs/userIcon.svg';
import UserList from '../user/UserList';
import ContentLeft from '../content/ContentLeft';
import ContentUp from '../content/ContentUp';

const { Content, Sider } = Layout;

class CustomLayout extends Component {

	state = {
		collapsed: true
	};
	
	onCollapse = collapsed => {
		this.setState({ collapsed });
	};
			
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
					<Content className = 'contentUp'>
						<ContentUp/>
					</Content>

					<Content className = 'contentLeft'>
						<ContentLeft/>
						<img src = { userIcon } className = 'logo' alt = ''/>
					</Content>

					<Content className = 'userList'>
						<UserList/>
					</Content>

					<Button className = 'next'>
						Próximo Passo
					</Button>

					{/* <Content className = 'userList'> */}
					{/* <img src = { userIcon } className = 'logo' /> */}
						{/* dadadsa
					</Content>
					<Button 
						className = 'button'
						type = 'primary'
					>
						Próximo Passo
					</Button> */}
					{/* <Content style = {{ margin: '0 35px' }} >
					
					<div style={{ padding: 24, background: '#fff', minHeight: 360, marginTop: 420 }}>Bill is a cat.</div>
				</Content> */}
					
					
					{/* <Footer style={{ textAlign: 'center' }}>Sea Tecnologia ©2019 Victor Hugo Lopes Mota</Footer> */}
				</Layout>
			</Layout>
		);
	}		
}

export default CustomLayout;