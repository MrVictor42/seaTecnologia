import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import '../../custom.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class CustomLayout extends Component {
  
	state = {
    	collapsed: true,
  	};

	onCollapse = collapsed => {
		this.setState({ collapsed });
	};

  	render() {
		return (
			<Layout 
				style = {{ 
					minHeight: '100vh' 
				}}
			>
			<Sider 
				collapsed = { this.state.collapsed } 
				onCollapse = { this.onCollapse }
				className = 'sider'
			>
				<div className = 'logo' />
				<Menu
					mode = 'inline'
					className = 'menu'
					defaultSelectedKeys = {['1']}
				>	
					<Menu.Item key = '1'>
						
					</Menu.Item>
					<Menu.Item key = '1'>
						
					</Menu.Item>
					<Menu.Item key = '2'>
						<Icon type = 'pie-chart' />
						<span> Option 1 </span>
					</Menu.Item>
					<Menu.Item key = '2'>
						<Icon type="desktop" />
						<span> Option 2 </span>
					</Menu.Item>
					<SubMenu
						key = 'sub1'
						title = {
							<span>
								<Icon type = 'user' />
								<span> User </span>
							</span>
						}
					>
						<Menu.Item key = '3'> Tom </Menu.Item>
						<Menu.Item key = '4'> Bill </Menu.Item>
						<Menu.Item key = '5'> Alex </Menu.Item>
					</SubMenu>
					<SubMenu
						key = 'sub2'
						title={
							<span>
								<Icon type = 'team' />
								<span> Team </span>
							</span>
						}
					>
						<Menu.Item key = '6'> Team 1 </Menu.Item>
						<Menu.Item key = '8'> Team 2 </Menu.Item>
					</SubMenu>
					<Menu.Item key = '9'>
						<Icon type = 'file' />
						<span> File </span>
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout>
				<Header style={{ background: '#fff', padding: 0 }} />
				<Content style = {{ 
						margin: '24px 42px 0', 
						overflow: 'initial' 
					}}>

					<div 
						style = {{ 
							background: 'white', 
							padding: 24, 
							minHeight: 280	 
						}}
					>
						{this.props.children}
					</div>
				</Content>
					<Footer style={{ textAlign: 'center' }}>SEA Tecnologia ©2019 Criado por Victor Hugo Lopes Mota</Footer>
				</Layout>
			</Layout>
		);	
	}
}

export default CustomLayout;