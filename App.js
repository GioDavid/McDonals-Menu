import { StatusBar } from 'expo-status-bar';
import React from 'react';
import GlobalState from './src/context/globalState';
import Main from './src/Layout/Main';

export default function App() {
  return (
    <GlobalState>
      <StatusBar />
      <Main />
    </GlobalState>
  );
}