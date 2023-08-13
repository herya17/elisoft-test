const getUser = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const responseJson = await response.json();
  return responseJson;
}

const getAllUser = async () => {
  const listProfileGithub = [];
  const listUsername = ['herya17', 'andriannus', 'nasrulgunawan', 'azizarizaldi', 'lukman-bahar-ap', 'asyarialmuslimin', 'Fikrii2210', 'satyawikananda', 'crownix'];

  listUsername.forEach(async (username) => {
    const response = await getUser(username);
    listProfileGithub.push(response);
  });

  return listProfileGithub;
}

export { getAllUser };
