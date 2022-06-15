import React from 'react';
import Context from './context';

export default class GlobalState extends React.Component{
state = {
  items: [],
  selectedItem: null,
}

setItems = (items) => {
  this.setState({items});
};

setSelectedItem = (selectedItem) => {
  this.setState({selectedItem});
};

render(){
 return (
  <Context.Provider 
   value={{
    items: this.state.items,
    selectedItem: this.state.selectedItem,
    setItems: this.setItems,
    setSelectedItem: this.setSelectedItem,
   }}
  >
   {this.props.children}
  </Context.Provider>
 );
 }
}