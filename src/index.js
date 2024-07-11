console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
 const imgUrl = "https://dog.ceo/api/breeds/image/random/4"; 
 fetch(imgUrl) .then(response => response.json()) .then(data => { 
const imageContainer = document.getElementById('dog-image-container');
 data.message.forEach(imageUrl => {
 const img = document.createElement('img'); 
 img.src = imageUrl; imageContainer.appendChild(img); 
}); 
})
 .catch(error => console.error('Error fetching images:', error)); 
});
document.addEventListener('DOMContentLoaded', () => { 
const breedUrl = "https://dog.ceo/api/breeds/list/all";
 fetch(breedUrl) .then(response => response.json()) .then(data => { 
const breedList = document.getElementById('dog-breeds'); 
Object.keys(data.message).forEach(breed => {
 const li = document.createElement('li');
 li.textContent = breed; breedList.appendChild(li); 
});
 })
  .catch(error => console.error('Error fetching breeds:', error));
 });
 document.addEventListener('DOMContentLoaded', () => { 
const breedList = document.getElementById('dog-breeds'); 
breedList.addEventListener('click', (event) => {
 if (event.target.tagName === 'LI') { 
event.target.style.color = 'blue';
 } 
});
 });
 document.addEventListener('DOMContentLoaded', () => {
 const breedUrl = "https://dog.ceo/api/breeds/list/all"; 
 const breedList = document.getElementById('dog-breeds');
 const breedDropdown = document.getElementById('breed-dropdown');
 fetch(breedUrl) .then(response => response.json()) .then(data => {
 const breeds = Object.keys(data.message); 
 const renderBreeds = (filter = '') => { 
breedList.innerHTML = ''; breeds.forEach(breed => {
 if (breed.startsWith(filter)) {
 const li = document.createElement('li');
  li.textContent = breed;
   breedList.appendChild(li);
 }
 });
 }; 
 renderBreeds(); 
 breedDropdown.addEventListener('change', (event) => {
 renderBreeds(event.target.value); 
});
 }) 
 .catch(error => console.error('Error fetching breeds:', error));
 });