import { useState } from 'react'

import Content from './components/content.jsx'
import AddTransac from './components/addTransac.jsx';

import './App.css'

function App() {
  const [transaction, setTransaction] = useState([]);
  const [newActive, setNewActive] = useState(false);
  const [Display, setDisplay] = useState("dashboard");


  const buttonDashboard=()=>{
      setDisplay("dashboard");
  }
  const buttonAllTransac=()=>{
      setDisplay("AllTransac");
  }
  const buttonNewTransac=()=>{
      setNewActive(true);
  }

  const newTransac = ()=>{
      if(newActive)
        return(<AddTransac data={transaction} setData={setTransaction} setNewActive={setNewActive}/>);
      return(<></>);
  };

  return (
    <>
      {newTransac()}
      <div className='flex justify-center flex-col h-full w-full'>
        <div className="w-[100%] h-full hexagon-bg"></div>
        <div className='navbar flex justify-between rounded-xl bg-white p-4 flex-row h-[10%] m-2 outline outline-black/5 items-center'>
          <div>
            <button className='text-l font-medium mx-4' onClick={buttonDashboard}>Dashboard</button>
            <button className='text-l font-medium mx-4' onClick={buttonAllTransac}>All Transactions</button>
          </div>
          <button className='text-l font-medium mx-4' onClick={buttonNewTransac}>New Transaction</button>
        </div>
        <Content mode={Display} data={transaction}/>
        <footer className='bottom-0 left-0 z-[-100] rounded-xl font-black h-[10%] m-2 text-center bg-white'>
          Built to Learn
        </footer>
      </div>
    </>
  )
}

export default App
