import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToastMessage } from "../../redux/actionCreators";
import { RootState } from "../../redux/reducers";

function Toast() {
  const dispatch = useDispatch();
  const { toastMessage, toastStatus } = useSelector(
    (state: RootState) => state.movies
  );

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (toastMessage) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        dispatch(setToastMessage(""));
      }, 3000);
    }
    // eslint-disable-next-line
  }, [toastMessage]);
  return (
    <div
      className={`flex justify-center w-screen ${
        showToast ? "block" : "hidden"
      }`}
    >
      <div
        className={`flex items-center p-4 w-full max-w-sm text-gray-500 ${
          toastStatus === "success" ? "bg-light-green" : "bg-red-400"
        } rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 fixed top-5 z-50`}
        role="alert"
      >
        <div className="ml-3 text-sm text-white font-bold">{toastMessage}</div>
      </div>
    </div>
  );
}

export default Toast;
