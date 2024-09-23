export default function Gallery({person, size, profession, awards, discovered}) {
    return (
        <section className="profile">
          <h2>{person.name}</h2>
          <img
            className="avatar"
            src={person.src}
            alt={person.name}
            width={size}
            height={size}
          />
          <ul>
            <li>
              <b>Profession: </b> 
              {profession}
            </li>
            <li>
              <b>Awards: {awards.number} </b> 
              ({awards.info})
            </li>
            <li>
              <b>Discovered: </b>
              {discovered}
            </li>
          </ul>
        </section>
);
}