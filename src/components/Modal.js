import React, { Component } from 'react';
import reactDom from 'react-dom';

class Modal extends Component {

    constructor(props) {
      super(props)
    
      this.popUpContainer = document.createElement('div')
      document.body.appendChild(this.popUpContainer);
    }

    componentWillUnmount() {
        document.body.removeChild(this.popUpContainer);
    }
    

    render() {
        return reactDom.createPortal (
            <div className='modal' onClick={this.props.close}>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut placeat officiis pariatur nisi nulla accusantium ad, esse ipsum excepturi. Commodi perferendis eius provident ea eveniet nemo fugiat quis odit quaerat!</p>
                    <div className='container__button'>
                        <button>Fermer</button>
                    </div>
                </div>
            </div>,
            this.popUpContainer
        )
    }
}

export default Modal;