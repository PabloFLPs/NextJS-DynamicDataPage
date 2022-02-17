import {Header} from "../components/Header"
import {Home} from "../components/Home"
import {Contact} from "../components/Contact"
import {RatingsSection} from "../components/RatingsSection"
import {ServiceAreas} from "../components/ServiceAreas"
import {Footer} from "../components/Footer"

export default function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Contact/>
      <RatingsSection/>
      <ServiceAreas/>
      <Footer/>
    </div>
  )
}
