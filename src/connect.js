import { Consumer } from './Provider';


const connect = (first, second = null) => (third) => {
  console.log(Consumer);
};

export default connect;
