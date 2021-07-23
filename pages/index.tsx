import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseCount,
  increaseCount,
} from '../stores/reducers/counter.reducer';
import { getCount } from '../stores/selectors/counter.selector';

const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCount);

  return (
    <div>
      <h1 className="flex justify-center items-center">Tailwind Test</h1>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <Image
            className="h-12 w-12"
            src="/images/test.jpeg"
            alt="ChitChat Logo"
            width="120"
            height="120"
          />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>

      <br />

      <h2 className="flex justify-center items-center m-2">Counter</h2>
      <div className="flex flex-col items-center">
        <p>current count: {count}</p>
        <div>
          <button
            className="rounded border-2 p-1"
            onClick={() => dispatch(increaseCount())}
          >
            increase
          </button>
          <button
            className="rounded border-2 p-1"
            onClick={() => dispatch(decreaseCount())}
          >
            decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
