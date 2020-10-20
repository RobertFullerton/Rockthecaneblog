const btn = document.querySelector('#hideshowbtn');
const postDiv = document.querySelector('.showhidediv');

btn.addEventListener('click', () => {
    if(postDiv.style.display === 'none') {
      postDiv.style.display = 'block';
      btn.innerHTML = 'Hide Posts';
    } else {
      postDiv.style.display = 'none';
      btn.innerHTML = 'Load More Posts';
    }
});
