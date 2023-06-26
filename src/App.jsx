import index  from './assets/style/index.module.scss'
import Carousel from './components/Carousel'
import Categories from './components/Categories'
import Techproduct from './components/Techproduct'
import Furnitureproduct from './components/Furnitureproduct'
import Shoeproduct from './components/Shoeproduct'
import Login from './components/Login'
import Otherproduct from './components/Otherproduct'
import Logo from './components/Logo'

function App() {

  return (
    <div>
        <nav>


        </nav>

      <Carousel/>
      <Categories/>
      <Techproduct/>
      <Furnitureproduct/>
      <Shoeproduct/>
      <Login/>
      <Otherproduct/>
      <Logo/>
    </div>
  )
}

export default App
