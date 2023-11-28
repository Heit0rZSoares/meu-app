import './PackingList.css';


const Item = ({ name, isPacked }) => (
  <li className={`Item ${isPacked ? 'packed' : ''}`}>
    {isPacked ? `${name} ✓` : name}
  </li>
);

const PackingList = () => (
  <div>
    <h1>Packing List</h1>
    <ul>
      <Item isPacked={true} name="HotDog" />
      <Item isPacked={false} name="Cachorro-Quente" />
    </ul>
  </div>
);

export default PackingList;

