import React from 'react';
import PropTypes from 'prop-types';
import ListSkeleton from '../components/Skeleton';
import ListProfileGithub from '../components/ListProfileGithub';

function ListProfileGithubPage({ isLoading, listProfiles }) {
  if (isLoading) {
    return (
      <ListSkeleton listToRender={5} />
    );
  }

  return (
    <>
      {
        listProfiles.length > 0
          ? <ListProfileGithub listProfiles={listProfiles} />
          : <p>Kosong, tidak dapat ditemukan</p>
      }
    </>
  );
}

ListProfileGithubPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  listProfiles: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ListProfileGithubPage;
