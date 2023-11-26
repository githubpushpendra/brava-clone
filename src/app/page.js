import Image from 'next/image'
import NavBar from './pages/NavBar'
import Screen from './pages/Screen'
import Maquee from './pages/Maquee';
import Card from './pages/Card'
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Home() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <Screen />
      </div>
      <div>
        <Maquee />
      </div>
    </div>
  )
}
