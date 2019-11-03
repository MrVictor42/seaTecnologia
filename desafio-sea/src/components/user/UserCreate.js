import React, { Component } from 'react';
import { Layout, Icon, Switch, Form, Input, Button, Radio, Select, Upload, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { createUser } from '../../store/actions/user';
import ContentUp from '../content/ContentUp';

const { Content } = Layout;
const { Option } = Select;

class UserCreate extends Component {

    state = {
		confirmDirty: false,
	};

	handleSubmit = e => {
		
		e.preventDefault();
		
		this.props.form.validateFieldsAndScroll((err, values) => {

			if (!err) {
                
                const user = {
                    name: values.name,
                    cpf: values.cpf,
                    cargo: values.office,
                    atividade: values.activity
                }

                this.props.createUser(user);
				this.props.history.push('/');			
			
			} else {

			}	
		});
	};

    render() {

        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <Content className = 'contentUp'>
                    <ContentUp />
                </Content>
                <Content className = 'contentAddUser'>
                <Form onSubmit = { this.handleSubmit } >
                    <div className = 'userAddTop'>
                            <Link to = { '/' } >
                                <Icon
                                    className = 'iconBackAddUser' 
                                    type = 'arrow-left'
                                /> 
                            </Link>
                            <div className = 'textAddUser'>
                                Adicionar Funcionário
                            </div>
                            <div className = 'userFormActive'>
                                <div className = 'textFormActive'>
                                    O trabalhador está ativo ou inativo?
                                </div>
                                <Form.Item className = 'switchAtive'>
                                    {
                                        getFieldDecorator('switch', { 
                                            valuePropName: 'checked' 
                                        })(
                                            <Switch 
                                                checkedChildren = 'Ativo' 
                                                unCheckedChildren = 'Inativo'/>
                                        )
                                    }
                                </Form.Item>
                            </div>
                            <div className = 'fieldsDatas1'>
                                <div className = 'textName'>
                                    Nome
                                </div>
                                <Form.Item className = 'fieldName'>
                                    {
                                        getFieldDecorator('name', {
                                            rules: [{
                                                required: true,
                                            }]
                                        })(
                                            <Input />
                                        )
                                    }
                                </Form.Item>
                                <div className = 'textCpf'>
                                    CPF
                                </div>
                                <Form.Item className = 'fieldcpf'>
                                    {
                                        getFieldDecorator('cpf', {
                                            rules: [{
                                                required: true,
                                            }]
                                        })(
                                            <Input />
                                        )
                                    }
                                </Form.Item>
                                <div className = 'textRg'>
                                    RG
                                </div>
                                <Form.Item className = 'fieldRg'>
                                    {
                                        getFieldDecorator('rg', {
                                            rules: [{
                                                required: true,
                                            }]
                                        })(
                                            <Input />
                                        )
                                    }
                                </Form.Item>
                                <div className = 'textSex'>
                                    Sexo
                                </div>
                                <Form.Item className ='fieldSex'>
                                    {
                                        getFieldDecorator('sex')(
                                            <Radio.Group>
                                                <Radio value = 'masculino'> Masculino </Radio>
                                                <Radio value = 'feminino'> Feminino </Radio>
                                            </Radio.Group>
                                        )
                                    }
                                </Form.Item>
                                <div className = 'textBirth'>
                                    Data de Nascimento
                                </div>
                                <Form.Item className = 'fieldBirth'>
                                    {
                                        getFieldDecorator('birth', {
                                            rules: [{
                                                required: true,
                                            }]
                                        })(
                                            <Input />
                                        )
                                    }
                                </Form.Item>
                                <div className = 'textOffice'>
                                    Cargo
                                </div>
                                <Form.Item className = 'fieldOffice'>
                                    {
                                        getFieldDecorator('office', {
                                            initialValue: ''
                                        })(
                                            <Select defaultValue = '1'>
                                                <Option value = ''> </Option>
                                                <Option value = 'cargo1'> Cargo 1</Option>
                                                <Option value = 'cargo2'> Cargo 2 </Option>
                                            </Select>
                                        )
                                    }
                                </Form.Item>
                            </div>
                            <div className = 'fieldsDatas2'>
                                <div className = 'textEpi'>
                                    Quais EPIs o trabalhador usa na atividade?
                                </div>
                                <Checkbox 
                                    onChange = { this.onChange }
                                    className = 'fieldEpi'
                                > 
                                        O trabalhador não usa EPI. 
                                </Checkbox>
                                <div className = 'activity'>
                                    <div className = 'textSelect'>
                                        Selecione a atividade:
                                        <Form.Item className = 'fieldSelect'>
                                            {
                                                getFieldDecorator('activity', {
                                                    initialValue: ''
                                                })(
                                                    <Select defaultValue = '1'>
                                                        <Option value = ''> </Option>
                                                        <Option value = 'atividade1'> Atividade 1 </Option>
                                                        <Option value = 'atividade2'> Atividade 2 </Option>
                                                    </Select>
                                                )
                                            }
                                        </Form.Item>
                                    </div>
                                    <div className = 'textSelectEpi'>
                                        Selecione o EPI:
                                        <Form.Item className = 'fieldSelectEPI'>
                                            {
                                                getFieldDecorator('selectEpi', {
                                                    initialValue: ''
                                                })(
                                                    <Select defaultValue = '1'>
                                                        <Option value = ''> </Option>
                                                        <Option value = 'epi1'> EPI 1</Option>
                                                        <Option value = 'epi2'> EPI 2 </Option>
                                                    </Select>
                                                )
                                            }
                                        </Form.Item>
                                    </div>
                                    <div className = 'textNumberCA'>
                                        Informe o número do CA:
                                        <Form.Item className = 'fieldSelectEPI'>
                                            {
                                                getFieldDecorator('numberCa', {
                                                    rules: [{
                                                        required: true,
                                                    }]
                                                })(
                                                    <Input />
                                                )
                                            }
                                        </Form.Item>
                                    </div>
                                    <div className = 'textAddEpi'>
                                        Adicionar EPI
                                    </div>
                                </div>
                                <Button className = 'buttonAddActivity'>
                                    Adicionar outra atividade
                                </Button>
                                
                            </div>
                            <div className = 'fieldsDatas3'>
                                <div className = 'textFile'>
                                    Adicione Atestado de Saúde Ocupacional (opcional):  
                                </div>
                                <Form.Item className = 'fieldHealth'>
                                    <Input placeholder = 'Documento 1.png'/>
                                </Form.Item>
                                <Upload>
                                    <Button className = 'buttonFile'>
                                        Selecionar Arquivo
                                    </Button>
                                </Upload>
                            </div>
                            <Button className = 'buttonSave' htmlType = 'submit'>
                                Salvar
                            </Button>
                        </div>
                    </Form>
                </Content>
            </div>
        );
    }
}

const UserCreateForm = Form.create()(UserCreate);

const mapDispatchToProps = dispatch => {

	return {
		createUser: (user) => dispatch(createUser(user))
	};
}

export default connect(mapDispatchToProps)(UserCreateForm);