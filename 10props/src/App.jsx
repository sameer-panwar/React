import { useState } from 'react'
import './App.css'
import Avator from './Avator.jsx';
import Gallery from './Gallary.jsx';

// function App() {
//   const [name, setName]=useState("");

//   function handleOutputName(event){
//   	setName(event.target.value);
//   }
	
//   return (
//     <>
//       <h1>What is your name:</h1>
//       <input
//       className='name'
//       placeholder="John"
//       onChange={handleOutputName}
//       value={name}
//       />
//       <p>Welcome {name? name: "stranger"}!</p>
//       </>
// );
// }






// const person={
//   name: "Sameer",
//   theme:{
//     backgroundColor: 'black',
//     color: 'white'
//   }
// };

// function App(){

//   return(
//     <>
//       <div style={person.theme}>
//           <h1>{person.name}</h1>
//           <img
//             src='https://i.pinimg.com/736x/cf/0b/74/cf0b7475f26c043b55fe50cfb98c15d5.jpg '
//             alt='professor'
//             width={200}
//             height={200}
//           />
//           <ul>
//             <li>Improve the videophone</li>
//             <li>Prepare aeronautics lectures</li>
//             <li>Work on the alcohol-fuelled engine</li>
//           </ul>
//       </div>
//     </>
//   );
// }






// function Card({children}){
//   return (
//         <div className='card'>
//           {children}
//         </div>
//   );
// }

// function App(){
//   const person={
//     name:"Professor",
//     theme:{
//       backgroundColor: 'black',
//       color: 'white'
//     }
//   }
//   return(
//     <>
//     <Card>
//       <Avator
//         person={person}
//         size={300}
//       />
//     </Card>
//     </>
//   );
// }

function Card({children}){
  return (
    <div>
      {children}
    </div>
  );
}

function App(){
const person1={
  name:'Maria Skłodowska-Curie',
  src: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Marie_Curie_c._1920s.jpg',
  awards:{
    number:2,
    info:'(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)'
  },
  discovered:'polonium (chemical element)',
  profession:'physicist and chemist'
}

const person2={
  name:'Katsuko Saruhashi',
  src:'https://upload.wikimedia.org/wikipedia/en/0/08/Katsuko_Saruhashi.jpg',
  awards:{
    number:2,
    info:'(Miyake Prize for geochemistry, Tanaka Prize)'
  },
  discovered:'a method for measuring carbon dioxide in seawater',
  profession:'geochemist'
}
  

  return(
    <Card>
      <h1>Notable Scientist</h1>
      <Gallery
       person={person1}
       size={70}
       profession={person1.profession}
       awards={person1.awards}
       discovered={person1.discovered}
      />
      <Gallery
       person={person2}
       size={70}
       profession={person2.profession}
       awards={person2.awards}
       discovered={person2.discovered}
      />
    </Card>
  );
}

export default App
