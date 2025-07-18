import {produce} from 'immer';
import Button from '../components/Button';
import { useReducer } from 'react';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'setValueToAdd';
const ADD_VALUE_TO_COUNT = 'addValueToCount';

const reducer = (state, action) => {

  switch (action.type) {
    case INCREMENT_COUNT:
      state.count += 1;
      return;
    case DECREMENT_COUNT:
      state.count -= 1;
      return;
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count += state.valueToAdd;
      state.valueToAdd = 0;
      return; 
    default:
      return;
  }


  // if (action.type === DECREMENT_COUNT) {
  //   return {
  //     ...state,
  //     count: state.count - 1
  //   } 
  // }
  // if( action.type === SET_VALUE_TO_ADD) {
  //   return {
  //     ...state,
  //     valueToAdd: action.payload
  //   }
  // }
  // if( action.type === INCREMENT_COUNT) {
  //   return {
  //       ...state,
  //       count: state.count + 1
  //   }
  // }
    
}

function CounterPage({ initialCount }) {
//   const [count, setCount] = useState(initialCount);
//   const [valueToAdd, setValueToAdd] = useState(0);
const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0
});

  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: INCREMENT_COUNT
    });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: DECREMENT_COUNT
    });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    // setValueToAdd(value);
    
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);

    dispatch({
      type: ADD_VALUE_TO_COUNT,
      
    });
  }

  return (
    <Panel>
      <h1 className="text-lg">Count is {state.count} </h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
            value={state.valueToAdd || ""}
            onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Submit</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
