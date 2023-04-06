import { useState, useEffect } from 'react';
import { BsWifiOff } from 'react-icons/bs';

const Internet = () => {
  const [isOnline, setOnline] = useState(true);

  useEffect(() => {
    function handleOnlineStatus() {
      setOnline(true);
    }

    function handleOfflineStatus() {
      setOnline(false);
    }

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOfflineStatus);

    return () => {
      window.addEventListener('online', handleOnlineStatus);
      window.addEventListener('offline', handleOfflineStatus);
    };
  }, []);

  return (
    <>
      {!isOnline && (
        <div className={`internet`}>
          <div className='d-flex align-items-center gap-2'>
            <span className='internet__box-offline d-flex align-items-center justify-content-center'>
              <BsWifiOff className='offline' />
            </span>
            <div>
              <h6 className='mb-1 fw-bold'>You're Offline</h6>
              <p className='mb-0'>Check your modem and router</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Internet;
