import Message from "./Message.jsx";

const Messages = ({messages}) => {
 
 return (
  <>
   <ul>
    {messages.map((elem, i) => <Message message={elem} key={i} />)}
   </ul>
  </>
 )
}

export default Messages