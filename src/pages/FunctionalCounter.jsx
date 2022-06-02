import React from 'react'
import { Button } from '../components/Button';

export const FunctionalCounter = (props) => {
  const {count, inc, dec} = props; //desctructuring
  return (
    <div>
      <h2 data-testid='header'>Counter App</h2>
      <div className='border w-80 my-5 mx-auto p-5 rounded-xl bg-white'>
          <h1 data-testid='counter'>{count}</h1>
        </div>
        <div className='flex justify-center space-x-6'>
          <Button idTest='increment-test' act={inc} label="+"/>
          <Button idTest='decrement-test' act={dec} label="-"/>
        </div>
    </div>
  )
}