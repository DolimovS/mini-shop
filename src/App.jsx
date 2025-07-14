import './App.css'
import Allproduct from './components/Allproduct'
import Homesection from './components/Homesection'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='container'>


      <main>
        <Homesection/>
        <div className="rightsection">
          <Navbar/>
          <Allproduct/>
        </div>
      

      </main>
    </div>
  )
}

export default App
