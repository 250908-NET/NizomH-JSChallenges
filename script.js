
document.getElementById('fetchBtn').addEventListener('click', () => {
  const id = document.getElementById('postId').value;
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    })
    .then(data => {
      document.getElementById('output').innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
    })
    .catch(error => {
     console.error('Fetch error:', error);
     document.getElementById('output').innerHTML = 'No post found.';
    }); 
});
