import { Suspense } from 'react'
import './App.css'
import { Banner } from './components/Banner'
import { Nav } from './components/nav'
import Technologies from './components/Technologies'
import type { ITechnology } from './type'

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
      <Suspense fallback={<h2>Loading....</h2>}>
            <Technologies technologyPromise={technologyPromise()}></Technologies>
      </Suspense>
     
    </>
  )
}

export default App
