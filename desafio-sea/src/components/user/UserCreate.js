import React, { Component } from 'react';
import { Layout, Icon, Switch, Form, Input, Button, Radio, Select, Upload, Checkbox } from 'antd';

const { Content } = Layout;
const { Option } = Select;

class UserCreate extends Component {

    handleSubmit = e => {
        
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    render() {

        const { getFieldDecorator } = this.props.form;
        return(
            <Content className = 'contentAddUser'>
                <Form onSubmit = { this.handleSubmit }>
                    
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
                                O trabalhador está ativo ou inativo?
                            </div>
                            <Form.Item className = 'switchAtive'>
                                {
                                    getFieldDecorator('switch', { 
                                        valuePropName: 'checked' 
                                    })(
                                        <Switch checkedChildren = 'Ativo' 
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
                                        rules: [
                                        {
                                            type: 'text',
                                            message: 'Coloque o seu nome!',
                                        },
                                        {
                                            required: true,
                                            message: 'Coloque o seu nome!',
                                        },
                                        ],
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
                                        rules: [
                                        {
                                            type: 'text',
                                            message: 'Coloque o seu CPF!',
                                        },
                                        {
                                            required: true,
                                            message: 'Coloque o seu CPF!',
                                        },
                                        ],
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
                                        rules: [
                                        {
                                            type: 'text',
                                            message: 'Coloque o seu RG!',
                                        },
                                        {
                                            required: true,
                                            message: 'Coloque o seu RG!',
                                        },
                                        ],
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
                                    getFieldDecorator('radio-group')(
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
                                        rules: [
                                        {
                                            type: 'date',
                                            message: 'Coloque a Data de Nascimento!',
                                        },
                                        {
                                            required: true,
                                            message: 'Coloque a Data de Nascimento!',
                                        },
                                        ],
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
                                        rules: [
                                        {
                                            type: 'date',
                                            message: 'Coloque a Data de Nascimento!',
                                        },
                                        {
                                            required: true,
                                            message: 'Coloque a Data de Nascimento!',
                                        },
                                        ],
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
                                                rules: [
                                                {
                                                    type: 'text',
                                                    message: 'Selecione a Atividade!',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Selecione a Atividade!',
                                                },
                                                ],
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
                                                rules: [
                                                {
                                                    type: 'text',
                                                    message: 'Selecione o EPI!',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Selecione o EPI!',
                                                },
                                                ],
                                            })(
                                                <Select defaultValue = '1'>
                                                    <Option value = ''> </Option>
                                                    <Option value = 'cargo1'> TO CERTO</Option>
                                                    <Option value = 'cargo2'> Cargo 2 </Option>
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
                                                rules: [
                                                {
                                                    type: 'text',
                                                    message: 'Informe o Número do CA!',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Informe o Número do CA!',
                                                },
                                                ],
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
        );
    }
}

const UserCreateForm = Form.create()(UserCreate);

export default UserCreateForm;