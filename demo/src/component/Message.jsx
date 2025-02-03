const Message = ({message}) => {
 
 return (
  <>
   <li>{message.message.toUpperCase()}</li>
  </>
 )
}

export default Message