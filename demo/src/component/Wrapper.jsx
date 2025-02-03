import Number from "./Number.jsx";

const Wrapper = () => {
 
 const numbers = [
  7, 12, 45
 ]
 
 return (
  <>
   <h1 className={""}>Nombre au cube</h1>
   <ul>
    {
     numbers.map((elem, i) => {
      return <Number number={elem} key={i} />
     })
    }
   </ul>
  </>
 )
}

export default Wrapper