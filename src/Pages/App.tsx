import React, { FC, useState } from 'react'
import logo from './logo.svg'

type Props = { }

export const App: FC<Props> = () => {
  const [count, setCount] = useState<number>(0)
  const [netlify, setNetlify] = useState<string | undefined>(undefined)
  const [input, setInput] = useState<string>('')

  

  const handleInput = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') fetchFromNetlify(input)
  }

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value)
  }

  const fetchFromNetlify = (name?: string): void => {
    const endpoint: string = '/api/hello-world' + (name ? '?name=' + name : '')
    fetch(endpoint)
    .then(
      (res: any) => {
        res.json().then((res: any) => setNetlify(res.message))
      }
    )
  }

  return (
    <div id="app" className="bg-dracula-darker">
      
      
        
        
          <h1 className="text-dracula-light text-6xl text-center p-6 font-sans underline">
            GriffinBot
          </h1>
        
      
    </div>
  )
}