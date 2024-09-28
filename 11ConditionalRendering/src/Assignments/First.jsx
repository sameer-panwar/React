// export default function Item({name, isPacked}){
//    return<li>{isPacked? name: name+ '❌'}</li>
// }


export default function Item({name, isPacked}){
    return <li>{name} {!isPacked && '❌'}</li>
}   