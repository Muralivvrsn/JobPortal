import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { errorActions }  from "../../store/Error"
const Swrong = ({text}) => {
  const action =  useSelector((state)=>state.check.isError);
  const dispatch = useDispatch()
  return (
    <div
      className={`position-fixed pop wrong p-1 d-${
        action ? "flex" : "none"
      }`}
    >
      <p className="text-center">{text}</p>
      <p
        onClick={() =>
          dispatch(errorActions.hasNoError())
        }
      >
        X
      </p>
    </div>
  );
};

export default Swrong;
