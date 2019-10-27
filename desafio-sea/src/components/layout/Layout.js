import React, { Component } from 'react';
import { Layout, Menu, Button, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import '../../custom.css';
import retangule from '../svgs/retangule.svg';
import miniRetangule from '../svgs/miniRetangule.svg';
import miniminiRetangule from '../svgs/miniminiRetangule.svg';
import userIcon from '../svgs/userIcon.svg';
import vectorIcon from '../svgs/vector.svg';
import UserList from '../user/UserList';
import ContentLeft from '../content/ContentLeft';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

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
					collapsed = { this.state.collapsed } 
					onCollapse = { this.onCollapse } className = 'sider' >
						<Menu className = 'iconMenuUp'>
			
							<img src = { retangule } className = 'retanguleIconFirst' />
							<Icon type = 'bank' className = 'iconMenuFirst'/>
							<img src = { retangule } className = 'retanguleIconSecond' />
							<Icon type = 'edit' className = 'iconMenuSecond'/>
							<img src = { miniRetangule } className = 'miniRetangule' />
							<img src = { retangule } className = 'retanguleIconThird' />
							<Icon type = 'apartment' className = 'iconMenuThird'/>
							<img src = { retangule } className = 'retanguleIconFourth' />
							<Icon type = 'bell' className = 'iconMenuFourth'/>
							<img src = { miniminiRetangule } className = 'miniminiRetangule' />
							<Icon type = 'audit' className = 'iconMenuFiveth'/>
							<img src = { retangule } className = 'retanguleIconFiveth' />
							<Icon type = 'rollback' className = 'iconMenuSixth'/>
							<img src = { retangule } className = 'retanguleIconSixth' />
							<Icon type = 'user' className = 'iconMenuSeventh'/>
						</Menu>

					{/* <Menu 
						className = 'menu' 
					> */}
						
						{/* <Menu.Item key = '2'>
							
						</Menu.Item>
						<Menu.Item key = '3'>
							
						</Menu.Item>
						
						<Menu.Item key = '4'>
							<Icon type = 'desktop' className = 'iconMenu'/>
						</Menu.Item>

						<Menu.Item key = '5'>
							<Icon type = 'desktop' className = 'iconMenu'/>
						</Menu.Item> */}
					{/* </Menu> */}
				</Sider>
				{/* <Layout>
					
					<Content className = 'contentUp'>
						<div>
							<Icon 
								type = 'minus'
								style = {{
									position: 'absolute',
									width: '1175px',
									left: '22px',
									top: '64px',
									border: '5px solid #4FA1C1',
									borderRadius: '20px'
								}}
							/>
							<Icon 
								type = 'desktop' 
								className = 'iconItem' 
								style = {{ 
									fontSize: '40px',
									color: '#FFFFFF',
									position: 'absolute',
									left: '22px',
									right: '87.7px',
									top: '42px',
									paddingTop: '13px',
									bottom: '90.8px',
								}}
							/>
							<Icon 
								type = 'desktop' 
								className = 'iconItem' 
								style = {{ 
									fontSize: '40px',
									color: '#FFFFFF',
									position: 'absolute',
									left: '160px',
									right: '87.7px',
									top: '42px',
									paddingTop: '13px',
									bottom: '90.8px',
								}}
							/>								
						</div>
					</Content>

					<Content className = 'contentLeft'>
						<ContentLeft/>
						<img src = { userIcon } className = 'logo' />
					</Content>

					<Content className = 'userList'>
					<img src = { userIcon } className = 'logo' />
						dadadsa
					</Content>
					<Button 
						className = 'button'
						type = 'primary'
					>
						Próximo Passo
					</Button>
					{/* <Content style = {{ margin: '0 35px' }} >
					
					<div style={{ padding: 24, background: '#fff', minHeight: 360, marginTop: 420 }}>Bill is a cat.</div>
				</Content> */}
					
					
					{/* <Footer style={{ textAlign: 'center' }}>Sea Tecnologia ©2019 Victor Hugo Lopes Mota</Footer> */}
				{/* </Layout> */} */}
			</Layout>
		);
	}		
}

export default CustomLayout;