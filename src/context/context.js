import React from 'react';

export default React.createContext({
  items: [],
  selectedItem: null,
  setItems : (items) => {},
  setSelectedItem: (items) => {},
});