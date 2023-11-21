import logo from './logo.svg';
import './App.css';
import { goodsArray } from './Array.jsx'
import { createContext, useState } from 'react';
import A from './A.jsx'

export const MyContext = createContext();

function App() {

  let [obj, setObj] = useState({ "product_name": "", "product_description": "", "product_price": null });
  let [arr, setArr] = useState(goodsArray);

  const add = () => {
    let newArr = [...arr];
    newArr.push(obj);
    setArr(newArr);
  }

  const deleteGoods = (name) => {
    let newArr = [...arr];
    let arrOne = newArr.filter((item) => item.product_name !== name);
    setArr(arrOne);
  }

  
  const edit = (index, updatedProduct) => {
    let newArr = [...arr];
    newArr[index] = updatedProduct;
    setArr(newArr);
  };


  return (
    <MyContext.Provider value={{arr, setObj, obj, add, deleteGoods, edit}}>
      <div className="App">
        <A/>
      </div>
    </MyContext.Provider>
    
  );
}

export default App;
