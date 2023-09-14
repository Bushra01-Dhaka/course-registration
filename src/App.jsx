import './App.css'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'

function App() {


  return (
    <>
     <Header></Header>
     <div className="container flex max-w-7xl mx-auto">
            {/* card section */}
            <div>
                   <Cards></Cards>
            </div>
            {/* cart section */}
            <div className="w-1/3 ml-4 mx-auto">

            </div>
     </div>
    </>
  )
}

export default App
