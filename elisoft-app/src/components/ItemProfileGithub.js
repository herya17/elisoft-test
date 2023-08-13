import React from 'react';
import PropTypes from 'prop-types';

function ItemProfileGithub({ avatar_url, login, name, followers, following, public_repos }) {
  return (
    <div className='item-profile-github'>
      <div className='item-profile-github__header'>
        <img className='lazyload' src='/skeleton/placeholder.webp' data-src={avatar_url} alt='profile github' />
        <div className='item-profile-github__name'>
          <h2>{name}</h2>
          <p>{login}</p>
        </div>
      </div>
      <div className='item-profile-github__body'>
        <p>{followers} Followers</p>
        <p>{following} Following</p>
        <p>{public_repos} Repositories</p>
      </div>
    </div>
  );
}

ItemProfileGithub.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  public_repos: PropTypes.number.isRequired,
}

export default ItemProfileGithub;
