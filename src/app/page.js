import About from "./components/about-section"
import Inspiration from "./components/inspiration-section"
import Journey from "./components/journey-section"
import Landing from "./components/landing-section"
import Footprint from "./components/footprint-section"
import Message from "./components/message-section"
import Projects from "./components/projects-section"

export default function Home() {
  return (
    <main>
      <Landing/>
      <About/>
      <Journey/>
      <Inspiration/>
      <Message/>
      <Footprint/>
    </main>
  )
}
