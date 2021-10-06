
import './Kitchen.css';
import Oven from './Oven';
import Sink from './Sink';

function Kitchen() {
  return (
    <div className='kitchen'>
      <h1>Kitchen</h1>
      <Oven />
      <Sink />
    </div>
  );
}

export default Kitchen;


