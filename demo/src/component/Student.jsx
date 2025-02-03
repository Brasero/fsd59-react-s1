const Student = ({student}) => {
 
 const avg = student.notes.reduce((acc, curr) => {
  return acc + curr
 }, 0) / student.notes.length
 
 return (
  <div>
   <h4>Nom : {student.name}</h4>
   <span>Moyenne : {avg.toFixed(2)} / 20</span>
  </div>
 )
}

export default Student