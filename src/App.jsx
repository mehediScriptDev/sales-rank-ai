import './index.css'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Chatsection from './Components/Chatsection'

function App() {


  return (
    <>
      
      <section className='w-11/12 mx-auto'>
        <Header></Header>
        <Hero></Hero>
        <div>
          <Chatsection></Chatsection>
        </div>
      </section>
      
    </>
  )
}

export default App
