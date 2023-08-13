import React from 'react';
import PropTYpes from 'prop-types';

function Skeleton() {
  return (
    <div className='item-profile-github'>
      <div className='item-profile-github__header'>
        <img src='/skeleton/placeholder.webp' alt='profile github' />
        <div className='item-profile-github__name'>
          <div className='item-profile-github__skeleton-name skeleton'></div>
          <div className='item-profile-github__skeleton-username skeleton'></div>
        </div>
      </div>
      <div className='item-profile-github__body'>
        <div className='item-profile-github__skeleton skeleton'></div>
        <div className='item-profile-github__skeleton skeleton'></div>
        <div className='item-profile-github__skeleton skeleton'></div>
      </div>
    </div>
  );
}

function ListSkeleton({ listToRender }) {
  return (
    <>
      {
        Array(listToRender)
          .fill(1)
          .map((card, index) => (
            <Skeleton key={index} />
          ))
      }
    </>
  );
}

ListSkeleton.propTypes = {
  listToRender: PropTYpes.number.isRequired,
}

export default ListSkeleton;
