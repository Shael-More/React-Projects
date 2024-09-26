import React from 'react';

const Profile = ({ user }) => {
  const {
    avatar_url,
    created_at,
    followers,
    following,
    name,
    url,
    login,
    public_repos,
  } = user;

  const createData = new Date(created_at);
  return (
    <div className='flex gap-8 mt-10 justify-center items-center'>
      <img
        src={avatar_url}
        alt={name}
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '20px',
        }}
      />

      <div>
        <p>Username : {name}</p>
        <a className='underline' href={`https://github.com/${login}`}>
          {name || login}
        </a>
        <p>
          Joined On:{' '}
          {`${createData.getDate()} ${createData.toLocaleString('en-us', {
            month: 'short',
          })} ${createData.getFullYear()} `}
        </p>
        <p>Public Repos: {public_repos}</p>
        <p>Followers : {followers}</p>
        <p>Following : {following}</p>
      </div>
    </div>
  );
};

export default Profile;
