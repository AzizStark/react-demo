import { Suspense } from 'react'
import './App.css'
import { ParentComponent } from './precoded/ParentComponent'
import { MainComponent } from './components/MainComponent'

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading data...</div>}>
        <ParentComponent />
        <MainComponent />
      </Suspense>
    </>
  )
}

export default App
