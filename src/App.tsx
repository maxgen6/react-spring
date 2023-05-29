import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addSquare, ISquare, removeSquare} from "./store/squares.slice";
import {useTransition, animated} from "react-spring";

function App() {
  const data = useSelector<any, Array<ISquare> | []>(state => state.squareReducer)

  const transitions = useTransition(data,{
    from: { transform: `translateX(-100%)`, width: '20%', transition: 'all 0.09s ease' },
    enter: { transform: `translateX(0)`, width: '20%', transition: 'all 0.13s ease' },
    leave: { opacity: 0, transform: `translateX(-100%)`, transition: 'all 0.1s ease' },
  })


  console.log('data ', data);
  const dispatch = useDispatch();
  const handleAddSquare = () => {
    dispatch(addSquare({ id: Date.now() }))
  }

  const handleDeleteSquare = () => {
    dispatch(removeSquare(null))
  }


  return (
    <section className="flex flex-col justify-center items-center w-full h-screen">
      <div className="flex items-center gap-4 mb-5">
        <button
          className="py-2 px-4 text-base font-bold border cursor-pointer hover:bg-gray-400 duration-150 ease-in"
          onClick={handleAddSquare}
        >Add +</button>
        <button
          className="py-2 px-4 text-base font-bold border cursor-pointer hover:bg-gray-400 duration-150 ease-in"
          onClick={handleDeleteSquare}
        >Delete -</button>
      </div>

      <div className="flex gap-4 w-full px-4">
        {
          transitions((style) => (
          <animated.div style={style}>
            <div className="border-[2px] border-amber-600 h-[100px] bg-red-500" />
          </animated.div>
          ))
        }
        {/*{*/}
        {/*  data?.map(({ id }: { id: string }) => (*/}
        {/*    <div className="w-1/5 border-[2px] border-amber-600 h-[100px] bg-red-500" key={id} />*/}
        {/*  ))*/}
        {/*}*/}
      </div>
    </section>
  );
}

export default App;
