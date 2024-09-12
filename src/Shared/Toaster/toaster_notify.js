import React, { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const Toaster_Notify = () => {
  
    const toastState = useSelector(state => state.globalState.toast);

    const notify = (status, message) => {
        if(message) {
            if(status)
                return toast.success(message);
            return toast.error(message);
        }
    }
    useEffect(() => {
        if(toastState)
            notify(toastState.status, toastState.message);
    }, [toastState]);

  return (
    <>
        {true && <> 
            <ToastContainer
                position="top-right"
                autoClose={4000}
            />
        </>
        }
    </>
  );
}

export default Toaster_Notify;