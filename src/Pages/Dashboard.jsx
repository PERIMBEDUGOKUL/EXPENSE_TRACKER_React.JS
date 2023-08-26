import React from 'react'
import Form from '../Components/Form'
import Graph from '../Components/Graph'
import Transaction from '../Components/Transaction'

const Dashboard = () => {

  return (
    <div id='main' className='grid grid-cols-3 h-screen'>

      <div id='form' className='bg-red-300'>
        <Form />
      </div>
      
      <div id='left'>
        <div id='graph' className='bg-blue-300 flex justify-between items-center'>
          <Graph title="income" />
          <Graph title="expense" />
        </div>

        <div id='tran'  className='bg-green-300 h-[30rem] overflow-y-scroll'>
          <Transaction />
        </div>
        
      </div>

    </div>
  )
}

export default Dashboard