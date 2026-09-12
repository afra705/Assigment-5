import { Suspense } from 'react'
import './App.css'
import { Banner } from './components/Banner'
import { Nav } from './components/nav'
import Technologies from './components/Technologies'
import type { ITechnology } from './type'
import { Footer } from './components/Footer'

function App() {

  const technologyPromise = async():Promise<ITechnology[]> =>{
    const res = await fetch('data.json');
    const data = await res.json();
    return data;

  }
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h2 className='tex-2xl font-bold lg:w-7xl container mx-auto'>Loading....</h2>}>
            <Technologies technologyPromise={technologyPromise()}></Technologies>
      </Suspense>
     <Footer></Footer>
    </>
  )
}

export default App
