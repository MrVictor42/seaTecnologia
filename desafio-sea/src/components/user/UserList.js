import React, { Component } from 'react';
import { Button, Switch, Layout } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

const { Content } = Layout;

class UserList extends Component {

    state = {
        persons: [
            
        ]
    };

    componentDidMount() {
        axios.get('http://localhost:3001/users')
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
        });
    }

    render() {
        return (
            <Content className = 'userList'>
                <div className = 'userListTop' >
                    <div className = 'textUserListTop'>
                        Funcionários(s)
                    </div>
                    <Button 
                        type = 'ghost'
                        className = 'buttonAddUser'
                    >
                        <Link to = { '/criar_usuario/' } >
                            + Adicionar Funcionário 
                        </Link> 
                    </Button>
                    <Button
                        type = 'ghost'
                        className = 'onlyActives'    
                    >
                        Ver apenas ativos
                    </Button>
                    <Button
                        type = 'ghost'
                        className = 'cleanFilters'    
                    >
                        Limpar Filtros
                    </Button>
                    <div className = 'actives'>
                        Ativos 2/15
                    </div>
                    <div className = 'usersActives'>
                        <div className = 'nameUsersActives'>
                            Daniel Alves da Silva
                            <Button
                                type = 'primary'
                                className = 'cpfUser'    
                            >
                                000.000.000-99
                            </Button>
                            <Button
                                type = 'primary'
                                className = 'activeNumber'    
                            >
                                Act 00
                            </Button>
                            <Button
                                type = 'primary'
                                className = 'officeUser'    
                            >
                                Cargo 01
                            </Button>
                            <Button
                                type = 'primary'
                                className = 'optionsUser'    
                            >
                                ...
                            </Button>
                        </div>
                    </div>
                    <div className = 'usersActives1'>
                        <div className = 'nameUsersActives'>
                            Giselle Torres Lopes
                            <Button
                                type = 'primary'
                                className = 'cpfUser'    
                            >
                                000.000.000-99
                            </Button>
                            <Button
                                type = 'primary'
                                className = 'activeNumber'    
                            >
                                Act 00
                            </Button>
                            <Button
                                type = 'primary'
                                className = 'officeUser'    
                            >
                                Cargo 02
                            </Button>
                            <Button
                                type = 'primary'
                                className = 'optionsUser'    
                            >
                                ...
                            </Button>
                        </div>
                    </div>
                    <div className = 'switchText'>
                        A etapa está concluída?
                    </div>
                    <div className = 'switch'>
                        <Switch
                            checkedChildren = 'Sim' 
                            unCheckedChildren = 'Não' 
                        />
                    </div>
                </div>
                <Button className = 'next'>
                    Próximo Passo
                </Button>
            </Content>
        );
    }
}

export default UserList;