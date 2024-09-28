import './App.css'
import Item from './Assignments/First';


// function Item({name, isPacked}){
//   if(isPacked){
//     return <li className='item'>{name} ✅</li>;        //if we dont want to render anything at the condition we return NULL
//   }else{
//     return <li className='item'>{name}</li>;
//   }
// }

// function Item({name, isPacked}){
//   return <li>{isPacked? name + '✅' : name }</li>;
// }

// function Item({name, isPacked}){
//   return <li>
//     {isPacked?(
//       <del>
//          {name + '✅'}
//       </del>
//     ):
//     (
//       name
//     )}
//   </li>
// }

// function Item({name, isPacked}){
//   return <li>{name}{isPacked && '✅'}</li>;
// }

function App() {
return(
  <>
    <h1>List of Items</h1>
    <ul>
      <Item
        name="space suit"
        isPacked={true}
      />
      <Item
        name="Helmet with a golden leaf"
        isPacked={true}
      />
      <Item
        name="Photo of tam"
        isPacked={false}
      />
    </ul>
  </>
);
}

export default App
