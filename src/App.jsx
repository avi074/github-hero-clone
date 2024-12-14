import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import VideoButtons from "./components/VideoButtons"
import VideoCarousel from "./components/VideoCarousel"

function App() {
  const [src, setSrc] = useState(null)

  const handleSrc = (o) => setSrc({...o})

  return (
    <section id='hero' className='flex flex-col'>
      <div className='pt-4 overflow-x-clip bg-gradient-to-b from-[#0d1117] via-blue-500 to-violet-400'>
        <Header />
        <VideoCarousel source={src} />
      </div>
      <div className='py-4 bg-[#0d1537]'>
        <VideoButtons handleSrc={handleSrc}/>
        <Footer />
      </div>
    </section>
  )
}

export default App
