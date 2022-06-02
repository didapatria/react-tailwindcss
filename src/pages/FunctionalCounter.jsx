import React from 'react'
import { Button } from '../components/Button';

export const FunctionalCounter = (props) => {
  const {count, inc, dec, reset} = props; // Desctructuring
  return (
    <div>
      <h2 data-testid='header'>Counter App</h2>
      <div className='my-5 p-5 md:p-10 rounded-xl bg-white'>
          <h1 data-testid='counter'>{count}</h1>
        </div>
        <div className='space-y-2'>
          <div className='md:flex justify-between space-y-2 md:space-y-0 md:space-x-6'>
            <Button idTest='increment-test' act={inc} label="Increment"/>
            <Button idTest='decrement-test' act={dec} label="Decrement"/>
          </div>
          <Button idTest='reset-test' act={reset} label="Reset"/>
        </div>
    </div>
  )
}