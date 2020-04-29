export const fetchGithubUser = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(json => ({
      username: json.login,
      followerCount: json.followers,
      followingCount: json.following,
      profileUrl: json.url
    }));
};


