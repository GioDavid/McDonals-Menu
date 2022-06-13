import React from 'react';
import Context from './context';

export default class GlobalState extends React.Component{
state = {
  items: [],
}

setItems = (items) => {
  this.setState({items});
};

render(){
 return (
  <Context.Provider 
   value={{
    items: this.state.items,
    setItems: this.setItems,
   }}
  >
   {this.props.children}
  </Context.Provider>
 );
 }
}