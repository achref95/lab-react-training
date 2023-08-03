const NumbersTable = ({limit}) => {
    const list = Array.from({ length: limit}, (_, index) => index + 1)
  return (
    <div>
      <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 0 }}>
        {list.map((number) => 
          <li 
            key={number} 
            style={{
                color: 'black',
                width: '20%',
                textAlign: 'center',
                border: number % 2 === 0 ?'1px solid red' : '1px solid black',
                backgroundColor: number % 2 === 0 ? 'red' : 'white',
                padding: '5px',
                boxSizing: 'border-box',
            }}>
            {number}
          </li>
        )}
      </ul>
    </div>
  )
}

export default NumbersTable
