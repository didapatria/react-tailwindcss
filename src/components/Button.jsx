export const Button = ({idTest, act, label}) => {
  return (
    <button data-testid={idTest} className='bg-sky-600 p-1 rounded shadow text-white w-full' onClick={act}>
      {label}
    </button>
  )
}