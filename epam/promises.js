function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: 'User ' }), 1000);
  });
}

function fetchUserPosts(user) {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { userId: user.id, post: 'Post 1' },
          { userId: user.id, post: 'Post 2' },
        ]),
      1000,
    );
  });
}

// fetchUser(1)
//   .then((user) => {
//     console.log(user);
//     return fetchUserPosts(user);
//   })
//   .then((posts) => {
//     console.log(posts);
//   })
//   .cathch((err) => {
//     console.log(err);
//   });

async function fetchUserAndPosts(id) {
  try {
    const user = await fetchUser(id);
    const posts = await fetchUserPosts(user);
    console.log('posts', posts);
  } catch (err) {
    console.log(err);
  }
}

// fetchUserAndPosts(1);

async function fetchMultipleUsers(ids) {
  try {
    const userPromises = ids.map((id) => fetchUser(id));
    const users = await Promise.all(userPromises);console.log('users', users);
  } catch (error) {}
}

fetchMultipleUsers([1, 2, 3]);
