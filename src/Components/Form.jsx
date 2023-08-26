import React, { useState, useContext} from 'react'
import { incomeCategories, expenseCategories } from '../Constant/category'
import { v4 as uuid } from 'uuid'
import { GlobalState } from '../Context/Context'

const Form = () => {

  const { addTransactions } = useContext(GlobalState)

  const [formData, setFormData] = useState({
    type: "income",
    category: "",
    amount: 0,
    date: ""
  })
  let selectCategories = formData.type === "income" ? incomeCategories : expenseCategories

  const handleForm = () => {

    let transaction = {
      ...formData,
      id: uuid()   
    }

    addTransactions(transaction)
    setFormData({
      type: "income",
      category: "",
      amount: 0,
      date: ""
    })
  }

  return (
    <>
    <div clas='form1'>
    <div className='p-6'>
      <div>
        <center><h1>Form</h1></center>
      </div>

      <div className='flex flex-col gap-3 my-3'>
        <label className='text-lg' htmlFor="type">Transaction Type:</label>

        <select className='p-2 rounded border' name='type'value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <div className='flex flex-col gap-3 my-3'>
        <label className='text-lg' htmlFor="category">Category Type:</label>
        <select className='p-2 rounded border' name='category'value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
          {
            selectCategories.map(cat => (
              <option key={cat.type} value={cat.type}>{cat.type}</option>
            ))
          }
        </select>
      </div>

      <div className='flex flex-col gap-3 my-3'>
        <label className='text-lg' htmlFor="amount">Amount:</label>
        <input className='p-2 rounded border' type="number" name="amount" value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})} />
      </div>

      <div className='flex flex-col gap-3 my-3'>
        <label className='text-lg' htmlFor="date">Date:</label>
        <input className='p-2 rounded border' type="date" name="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} />
      </div>

      <div className='flex flex-col gap-3 my-12'>
        <button onClick={handleForm}  className='px-2 py-3 bg-blue-300 rounded'>Submit</button>
      </div>
    </div>
    </div>
    </>
  )
}
export default Form