import { useState } from 'react'
import Layout from './components/layout'
import './styles.css'

const App = () => {
  const [ass, setAss] = useState("left")
  return (
    <>
    <div>{ass}</div>
      {/* <Layout/> */}
    </>
  )
}

export default App
