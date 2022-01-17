import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { CounterBaseComponent } from "./components/counter-base.component";

function App() {
  return (
    <CounterBaseComponent initialValue={12} minValue={0} maxValue={6}/>
  );
}

export default App;
