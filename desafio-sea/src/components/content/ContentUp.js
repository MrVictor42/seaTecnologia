import React, { Component } from 'react';
import contentUp from '../svgs/contentUp.svg';
import iconContentUp from '../svgs/iconContentUp.svg';

class ContentUp extends Component {

    render() {
        let value = '';

        if(this.props.status === false) {
            value = '';
        } else {
            value = 'CONCLUIDO'
        }

        return (

            <div>
                <img src = { contentUp } className = 'contentUpIconImageFirst'  alt = '' />
                <img src = { iconContentUp } className = 'iconContentUpFirst'  alt = '' />
                <p className = 'textContentUpFirst'> ITEM 1 </p>
                <p className = 'textDoneUpFirst'> { value } </p>
                <img src = { contentUp } className = 'contentUpIconImageSecond'  alt = '' />
                <img src = { iconContentUp } className = 'iconContentUpSecond'  alt = '' />
                <p className = 'textContentUpSecond'> ITEM 1 </p>
                <img src = { contentUp } className = 'contentUpIconImageThird'  alt = '' />
                <img src = { iconContentUp } className = 'iconContentUpThird'  alt = '' />
                <p className = 'textContentUpThird'> ITEM 1 </p>
                <img src = { contentUp } className = 'contentUpIconImageFourth'  alt = '' />
                <img src = { iconContentUp } className = 'iconContentUpFourth'  alt = '' />
                <p className = 'textContentUpFourth'> ITEM 1 </p>
                <img src = { contentUp } className = 'contentUpIconImageFiveth'  alt = '' />
                <img src = { iconContentUp } className = 'iconContentUpFiveth'  alt = '' />
                <p className = 'textContentUpFiveth'> ITEM 1 </p>
                <img src = { contentUp } className = 'contentUpIconImageSixth'  alt = '' />
                <img src = { iconContentUp } className = 'iconContentUpSixth'  alt = '' />
                <p className = 'textContentUpSixth'> ITEM 1 </p>
                <img src = { contentUp } className = 'contentUpIconImageSeventh'  alt = '' />
                <img src = { iconContentUp } className = 'iconContentUpSeventh'  alt = '' />
                <p className = 'textContentUpSeventh'> ITEM 1 </p>
                <img src = { contentUp } className = 'contentUpIconImageEighth'  alt = '' />
                <img src = { iconContentUp } className = 'iconContentUpEighth'  alt = '' />
                <p className = 'textContentUpEighth'> ITEM 1 </p>
                <img src = { contentUp } className = 'contentUpIconImageNineth'  alt = '' />
                <img src = { iconContentUp } className = 'iconContentUpNineth'  alt = '' />
                <p className = 'textContentUpNineth'> ITEM 1 </p>
            </div>
        );
    }
}

export default ContentUp;