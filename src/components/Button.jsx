export const Button = ({idTest, act, label}) => {
  return (
    <button data-testid={idTest} className='bg-sky-600 border rounded shadow text-white w-1/3' onClick={act}>
      {label}
    </button>
  )
}