import React from 'react';
import ListProfileGithubPage from './ListProfileGithubPage';
import { useSearchParams } from 'react-router-dom';
import { getAllUser } from '../utils/api';

function ListProfileGithubPageWrapper() {
  const [listProfiles, setListProfiles] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  })

  React.useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getAllUser();

      setTimeout(() => {
        setIsLoading(false);
        setListProfiles(data);
      }, 2000);
    }

    getData();
  }, []);

  const onKeywordChangeHandler = (event) => {
    const keyword = event.target.value;
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredListProfiles = listProfiles.filter((listProfile) => (
    listProfile.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
  ));

  return (
    <div className='list-profile-github-page'>
      <input
        type='text'
        placeholder='Cari nama'
        value={keyword}
        onChange={onKeywordChangeHandler} />
      <div className='list-profile-github__container'>
        <ListProfileGithubPage isLoading={isLoading} listProfiles={filteredListProfiles} />
      </div>
    </div>
  );
}

export default ListProfileGithubPageWrapper;
