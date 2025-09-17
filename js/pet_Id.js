function loadPetId(id) {
  // console.log(id)
  const spinner = document.getElementById('spinner');
  spinner.classList.remove('hidden');

  const petsContainer = document.getElementById('pets-container')
  petsContainer.classList.add('hidden')

  const cartContainer = document.getElementById('cart-container')
  cartContainer.innerHTML = ''
  cartContainer.classList.add('hidden')

  const btn = document.getElementById(`btn-${id}`)
  removeActive()
  // console.log(btn)
  btn.classList.add('active')

  const url = `https://openapi.programming-hero.com/api/peddy/category/${id}`;
  setTimeout(function () {
    fetch(url)
      .then(res => res.json())
      .then(api => displayPet(api.data))
      .catch(err => console.log(err))
  }, 200)

}

const removeActive = () => {
  const categoryButtons = document.querySelectorAll(".category-btn");
  //   console.log(categoryButtons);
  categoryButtons.forEach((btn) => btn.classList.remove("active"));
};


const displayPet = (pets) => {
  // console.log(pets)

  document.getElementById('spinner').classList.add('hidden');

  pets.sort((a, b) => {
    return (b.price || 0) - (a.price || 0)
  })

  const petsContainer = document.getElementById('pets-container')
  petsContainer.innerHTML = '';

  petsContainer.classList.remove('hidden')

  if (pets.length === 0) {
    petsContainer.innerHTML = `
        <div class="text-center col-span-full bg-white border-1 border-gray-300  p-5 rounded-xl mx-5">
          <div class = 'md:p-20 p-5 bg-[#fbfbfb] border-1 border-gray-200 rounded-xl'>
            <div class="flex justify-center"><img src="./img/error.webp" alt=""></div>
            <h1 class="md:text-5xl text-xl font-bangla mt-5 font-bold">No Information Available</h1>
          </div>
        </div>
    
    `;
  }

  pets.forEach(pet => {
    // console.log(pet)
    const petBtn = document.createElement('div')
    petBtn.innerHTML = `
        <div class="card bg-base-100 shadow-sm border-1 border-gray-300">
          <figure class="px-5 pt-5">
            <img src="${pet.image ? pet.image : 'Missing'}" alt="Shoes"
              class="rounded-xl w-full h-52" />
          </figure>
          <div class="card-body  ">
            <h2 class="card-title text-2xl font-extrabold">${pet.pet_name ? pet.pet_name : 'Unkonwn'}</h2>
            <div class="flex items-center gap-2 text-gray-500 font-bold">
              <i class="fa-solid fa-table-cells-large"></i>
              <p>Breed: ${pet.breed ? pet.breed : 'Unknown'}</p>
            </div>
            <div class="flex items-center gap-2 text-gray-500 font-bold">
              <i class="fa-solid fa-box"></i>
              <p>Birth: ${pet.date_of_birth ? pet.date_of_birth : 'Unknown'}</p>
            </div>
            <div class="flex items-center gap-2 text-gray-500 font-bold">
              <i class="fa-solid fa-mercury"></i>
              <p>Gender: ${pet.gender ? pet.gender : 'Check The Pet'}</p>
            </div>
           <div class="flex items-center gap-2 text-gray-500 font-bold">
              <i class="fa-solid fa-dollar-sign"></i>
              <p>Price : ${pet.price ? pet.price : '950 $'} $</p>
            </div> 
              <div class="card-actions ">
                <button onclick = "loadPetImage(${pet.petId})" class="btn shadow-lg shadow-current hover:border-1 hover:border-gray-500"><img class="w-6 text-black" src="./img/like.png" alt=""></button>
                <button onclick = "startCountdown(event)" class="btn shadow-lg shadow-current hover:bg-[#0e7a81]"><span class="text-[#0e7a81] hover:text-white">Adopt</span></button>
                <button onclick = "loadPetDetails(${pet.petId})" class="btn shadow-lg shadow-current hover:bg-[#0e7a81]"><span class="text-[#0e7a81] hover:text-white">Details</span></button>
              </div>
            </div>
          </div>
            `;

    petsContainer.appendChild(petBtn)

  })
}

