import { useState } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  const hello = () =>{
    return(
    <h1 style={{color: "green"}}>Hello react World</h1>
  )
  }
  return (
    <>
      <header>
        <img src="https://img.freepik.com/vecteurs-libre/lettre-coloree-creation-logo-degrade_474888-2309.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713657600&semt=ais" alt="" />
        <nav className='nav'>
          <a href="">accueil</a>
          <a href="">filtres</a>
          <a href="">contacts</a>
        </nav>
      </header>
      {hello()}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
