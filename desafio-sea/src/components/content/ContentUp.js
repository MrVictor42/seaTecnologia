import React, { Component } from 'react';
import { Icon } from 'antd';

class ContentUp extends Component {

    render() {
        return (
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
        );
    }
}

export default ContentUp;