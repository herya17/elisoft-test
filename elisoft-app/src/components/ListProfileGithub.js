import React from 'react';
import ItemProfileGithub from './ItemProfileGithub';
import PropTypes from 'prop-types';

function ListProfileGithub({ listProfiles }) {
  return (
    <div className='list-profile-github'>
      {
        listProfiles.map((listProfile) => (
          <ItemProfileGithub key={listProfile.id} {...listProfile} />
        ))
      }
    </div>
  );
}

ListProfileGithub.propTypes = {
  listProfiles: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ListProfileGithub;
