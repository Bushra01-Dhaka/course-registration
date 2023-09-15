import { useState } from 'react';
import './App.css'
import Cards from './components/Cards/Cards'
import Carts from './components/Carts/Carts'
import Header from './components/Header/Header'

function App() {
  const [selectBtn, setSelectBtn] = useState([]);

  const handleSelectBtn = (select) =>
  {
    const isExist = selectBtn.find(item => item.id == select.id);
    if(isExist)  
    {
      return alert("Already Selected.");
    }   
    else 
    {
      const newSelectBtn = [...selectBtn, select];
      setSelectBtn(newSelectBtn);
    }

     
  }

  console.log("...",selectBtn);

  return (
    <>
     <Header></Header>
     <div className="container flex flex-col md:flex-row mx-auto">
            {/* cards section */}
            <div>
                   <Cards handleSelectBtn={handleSelectBtn}></Cards>
            </div>
            {/* carts section w-full md:w-1/3 */ }
            <div className=" ml-4 mx-auto  w-[100%] md:w-[70%]">
                     <Carts selectBtn={selectBtn}></Carts>
            </div>
     </div>
    </>
  )
}

export default App
