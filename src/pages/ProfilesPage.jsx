import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <div className='flex gap-2 m-4'>
      <div className='flex flex-col gap-2'>
        {profiles.map((profile) => (
          <NavLink key={profile} to={`/profiles/${profile}`} className={({isActive}) => isActive ? "text-red-600": ''}>
            Profile {profile}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default ProfilesPage;
