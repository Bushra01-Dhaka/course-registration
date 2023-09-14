import './App.css'
import Cards from './components/Cards/Cards'
import Carts from './components/Carts/Carts'
import Header from './components/Header/Header'

function App() {


  return (
    <>
     <Header></Header>
     <div className="container flex flex-col md:flex-row mx-auto">
            {/* cards section */}
            <div>
                   <Cards></Cards>
            </div>
            {/* carts section w-full md:w-1/3 */ }
            <div className=" ml-4 mx-auto border-2 p-2 w-[100%] md:w-[70%]">
                     <Carts></Carts>
            </div>
     </div>
    </>
  )
}

export default App
