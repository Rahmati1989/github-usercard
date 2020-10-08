/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users.Rahmati1989')
.then((response)=>{
  console.log(response)
  const data = response.data;
  const cardDiv = document.querySelector('.cards');
  cardDiv.appendChild(cardMaker(data));
})
.catch((error)=>{
  console.log("The request was unsuccessful")
  console.log(error)
})

function cardMaker(){
  const card = document.createElement('div')
  container.classList.add('card')

  const image = document.createElement('img')
  image.src = `${data.image_url}`;
  card.appendChild(image)
  

  const cardinfo = document.createElement('div')
  cardinfo.classList.add('card-info')
  card.appendChild(cardinfo)

  const title = document.createElement('h3');
  title.classList.add('name')
  title.textContent = `${data.name}`;
  cardinfo.appendChild(title);

  const username = document.createElement('p');
  username.classList.add('username')
  username.textContent = `${data.login}`;
  cardinfo.appendChild(username)

  const location = document.createElement('p')
  location.textContent = `${data.location}`
  cardinfo.appendChild(location)

  const profile = document.createElement('p')
  profile.textContent = "Profile:";
  cardinfo.appendChild(profile)

  const link = document.createElement('a')
  link.setAttribute = ('href', data.html_url)
  link.textContent = `${data.html_url}`;
  profile.appendChild(link)

  const followers = document.createElement('p');
  followers.textContent = `${data.followers}`;
  cardinfo.appendChild(followers)

  const following = document.createElement('p')
  following.textContent = `${data.following}`
  cardinfo.appendChild(following)

  const bio = document.createElement('p')
  biography.textContent = `${data.bio}`
  cardinfo.appendChild(bio)
}

/*;
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

  

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
