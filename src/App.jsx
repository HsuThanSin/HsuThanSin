import Header from './components/Header.jsx' 
import {IconA} from './components/Icons.jsx'
import {IconB} from './components/Icons.jsx'
import Image from './components/Image.jsx'

function App() {

  return (
    <>
      <div>
        <Header />
        <IconA />
        <IconB />
        Hello, me.
        <Image imageURL="https://img.freepik.com/free-photo/view-adorable-looking-kitten_23-2150886230.jpg?t=st=1707292890~exp=1707296490~hmac=11caa4286e4f4402a256b4d355a37c64997156e788e0d2dad2ac4ebc161f1eb6&w=1380" />
      </div>
    </>
  )
}

export default App
