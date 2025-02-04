const CounterButton = ({label, func}) => {
 
 return (
  <button onClick={func}>{label}</button>
 )
}

export default CounterButton