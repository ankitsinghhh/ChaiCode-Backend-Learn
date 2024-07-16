import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

//   const jokes = [
//     {
//         id: 1,
//         joke: 'Why was the coffee file a police report?'
//     },
//     {
//         id: 2,
//         joke: 'Why did the chicken cross the road?'
//     },
//     {
//         id: 3,
//         joke: 'Why did the tomato turn red?'
//     },
//     {
//         id: 4,
//         joke: 'Why did the cow cross the road?'
//     }
// ]
 
  const [jokes , setJokes] = useState([])

  useEffect(()=>{
    async function getData(){
      try {
        const res = await fetch("/api/jokes")
        // const res = await fetch('https://localhost:3000/jokes')
        const data = await res.json()
        setJokes(data)
        console.log(data)
        return data
        
      
      }
      catch(err){
        console.log("error aagya ")
        console.log(err)
      }
      
    }
    getData()
    
   
  },[])



  return (
    <>
     <h1> chai aur fullstack</h1>
     <p>Jokes : {jokes.length}</p>

     <div>
      {
        jokes.map(joke => {
          return (
            <div key={joke.id}>
              
              <p><span>{joke.id}</span>. {joke.joke}</p>
            </div>

          )
        })
      }
     </div>

    </>
  )
}

export default App
