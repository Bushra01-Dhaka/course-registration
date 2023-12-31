import { useState } from 'react';
import './App.css'
import Cards from './components/Cards/Cards'
import Carts from './components/Carts/Carts'
import Header from './components/Header/Header'
// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectBtn, setSelectBtn] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalRemaining , setTotalRemaining] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  let total = 20;

  const handleSelectBtn = (select) =>
  {
    const isExist = selectBtn.find(item => item.id == select.id);
    // initial credit
    let credit = select.credit;
    let coursePrice = select.price;
   
    

    if(isExist)  
    {
      // return alert("Already Selected.");
      // return toast.error("Already Selected");
      return toast.success(`Already Selected. You can check out other courses.`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      
      
    }   
  
    else 
    {
      selectBtn.forEach(item => {
        credit = credit + item.credit;
        coursePrice = (coursePrice + item.price);

      })

      if(credit > total)
      {
        // return alert("Sorry! Your credit limit exceeded.");
        // return toast.error("Sorry! Your credit limit exceeded.");
        return toast.error('Sorry! Your credit limit exceeded.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
      
      setTotalCredit(credit);
      const totalRemaining = total - credit;
      setTotalPrice(coursePrice);
      setTotalRemaining(totalRemaining);

     
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
                     <Carts selectBtn={selectBtn} totalCredit = {totalCredit} totalRemaining = {totalRemaining} totalPrice = {totalPrice} ></Carts>
            </div>
     </div>
     <ToastContainer />
    </>
  )
}

export default App
