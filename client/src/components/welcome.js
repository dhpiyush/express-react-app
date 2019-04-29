import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class Welcome extends Component {
  constructor(props){
    super(props);
    this.state = {
      text:''
    }
  }

  _onClick=() =>{
    console.log(this.state);
  }
  render() {
    return (<>
    <h1>Hello, {this.props.name}</h1>
    <Input onChange={e => this.setState({text: e.target.value})}/>
    <Button variant="contained" color="primary"  onClick={this._onClick} >
      submit
    </Button>
    </>);
  }
}

export default Welcome;