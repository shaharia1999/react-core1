import logo from './logo.svg';
import './App.css';


function App() {
  const nayeks=['shakib','alomgir','kober','omarSani'];
  const naykas=['SISIR','Sbana','kapila','mowsomi'];
  return (
    <div className="App">
      {
        nayeks.map(nayek=><Person name={nayek}></Person>)
      }{
        naykas.map(nayka=><Person heart={nayka}></Person>)
      }
     {/* <Person name={nayeks[0]} naika='mowsomi'></Person>
     <Person name ={nayeks[1]} naika='sabana'></Person>
     <Person name={nayeks[2]}naika='kapila'></Person>
     <Person name={nayeks[3]}naika='mousomi'></Person> */}
   
     <h1>noton component</h1>
     <Joydev name='ojoy'phone='090808908'></Joydev>
     <Joydev name='bejoy' phone='09908989'></Joydev>
  
    </div>
  );
}
function Person(props){
  return( <div className='person'>
     <h1>{props.name}</h1>
     <p> {props.heart}</p>
     </div>
  )
}
function Joydev(props){
  return(
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Phone: {props.phone}</p>
    </div>
  )
}
export default App;
