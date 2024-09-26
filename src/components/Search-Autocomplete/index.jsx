import React, { useEffect, useState } from 'react';
import Suggestion from './suggestion';

const SearchAutocomplete = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [query, setQuery] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        user && user.length
          ? user.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUser(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleClick = (e) => {
    setShowDropdown(false);
    setSearchParam(e.target.innerText);
    setFilteredUser([]);
  };
  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();

      if (data && data.users) {
        setUser(data.users.map((userItem) => userItem.firstName));
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading Data ! Please Wait</div>;
  }

  if (error) {
    return <div>Error Occurred...</div>;
  }

  return (
    <div>
      <input
        onChange={handleChange}
        name='search-user'
        value={searchParam}
        type='text'
        placeholder='Search User'
      />

      {showDropdown && (
        <Suggestion handleClick={handleClick} data={filteredUser} />
      )}
    </div>
  );
};

export default SearchAutocomplete;
