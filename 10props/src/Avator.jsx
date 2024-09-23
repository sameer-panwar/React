export default function Avator({person, size}){

  return(
    <>
      <div style={person.theme}>
          <h1>{person.name}</h1>
          <img
            src='https://i.pinimg.com/736x/cf/0b/74/cf0b7475f26c043b55fe50cfb98c15d5.jpg '
            alt='professor'
            width={size}
            height={size}
          />
          <ul>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
          </ul>
      </div>
    </>
  );
}