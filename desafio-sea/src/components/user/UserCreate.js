import React, { Component } from 'react';
import { Layout, Icon, Switch } from 'antd';

const { Content } = Layout;

class UserCreate extends Component {

    render() {
        return(
            <Content className = 'contentAddUser'>
                <div className = 'userAddTop'>
                    <Icon
                        className = 'iconBackAddUser' 
                        type = 'arrow-left'
                    />
                    <div className = 'textAddUser'>
                        Adicionar Funcionário
                    </div>
                    <div className = 'userFormActive'>
                        <div className = 'textFormActive'>
                             asdas
                        </div>
                        <Switch checkedChildren = 'Ativo' unCheckedChildren = 'Inativo' />
                    </div>
                </div>
            </Content>
        );
    }
}

export default UserCreate;