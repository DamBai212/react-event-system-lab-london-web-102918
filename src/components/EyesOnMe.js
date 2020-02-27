// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
   _onFocus = () =>{
       console.log('Good!')
   }

   _onBlur = () =>{
    console.log('Hey! Eyes on me!')
}
    render() {
        return <button onFocus={this._onFocus} onBlur={this._onBlur}>Coords</button>;
    }
}

export default EyesOnMe