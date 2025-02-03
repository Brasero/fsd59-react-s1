import Student from "./Student.jsx";

const Students = ({students}) => {
 
 return (
  <>
   {students.map((student, i) => <Student student={student} key={i} />)}
  </>
 )
}

export default Students