import React, { useEffect, useState } from 'react';
import Profile from './profile';

const ProfileFinder = () => {
  const [user, setUser] = useState('tom');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    fetchUser();
  };

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await response.json();

      if (data) {
        setUserData(data);
        setUser('');
      }
      console.log(data);
      
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <div>Loading Data ! Please Wait</div>;
  }

  if (error) {
    return <div>Error Occurred</div>;
  }

  return (
    <div>
      <div className='flex justify-center items-center mt-5'>
        <input
          className='border-2 p-1'
          type='text'
          name='user'
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder='Search Github User'
        />
        <button className='bg-gray-400 p-1 ml-2' onClick={handleSubmit}>
          Search
        </button>
      </div>
      {userData !== null ? <Profile user={userData} /> : null}
    </div>
  );
};

export default ProfileFinder;
