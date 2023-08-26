import React from 'react'
import useTransaction from '../Hooks/useTransaction'
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2'


const Graph = ({ title }) => {

  const  { chartData } = useTransaction(title)

  return (
    <div class='graph1'>
      <div className='h-96'>
        <h1>{title}</h1>
        <Doughnut data={chartData} />
      </div>
    </div>
  )
}

export default Graph