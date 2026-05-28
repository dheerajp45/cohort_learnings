import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { Intro } from './Intro'
import { Age } from './Age'
import { Otp } from './components/Otp'
import { Input } from './components/Input'
import { Button } from './components/button'
function App() {
return <div className='h-screen bg-blue-200 '>
    {/* <Input type="text" placeholder={"username"}></Input> */}
{/* <Button disabled={false}></Button> */}
<Otp number={5}></Otp>
</div>
}
 
export default App
