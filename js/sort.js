
const loadAllPetsSortByPrice = () => {
    //  document.getElementById('spinner').style.display='block';
    const spinner = document.getElementById('spinner');
    spinner.classList.remove('hidden');
    setTimeout(function () {
        fetch('https://openapi.programming-hero.com/api/peddy/pets')
            .then(res => res.json())
            .then(api => displayAllPetsSortByPrice(api.pets))
            .catch(err => console.log(err))
    }, 1000)

}

const displayAllPetsSortByPrice = (pets) => {
    // console.log(pets)

    //  document.getElementById('spinner').style.display='none';
    document.getElementById('spinner').classList.add('hidden');

    // descending sort
    // pets.sort((a, b) => (b.price || 0) - (a.price || 0));
    pets.sort((a, b) => {
        return (b.price || 0) - (a.price || 0)
    })



    const petsContainer = document.getElementById('pets-container')
    petsContainer.innerHTML = '';
    for (let pet of pets) {
        const card = document.createElement('div');
        card.innerHTML = `

    <div class="card bg-base-100 shadow-sm border-1 border-gray-300">
    <figure class="px-5 pt-5">
      <img src="${pet.image ? pet.image : 'Missing'}" alt="Shoes" class="rounded-xl w-full h-52" />
    </figure>
    <div class="card-body  ">
      <h2 class="card-title font-extrabold">${pet.pet_name ? pet.pet_name : 'Unkonwn'}</h2>
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
        <button onclick="loadPetImage(${pet.petId})" class="btn hover:border-1 hover:border-gray-500"><img
            class="w-6 text-black" src="./img/like.png" alt=""></button>
        <button onclick="startCountdown()" class="btn hover:bg-[#0e7a81]"><span
            class="text-[#0e7a81] hover:text-white">Adopt</span></button>
        <button onclick="loadPetDetails(${pet.petId})" class="btn hover:bg-[#0e7a81] "><span
            class="text-[#0e7a81] hover:text-white">Details</span></button>
      </div>
    </div>
  </div>
  `;

        petsContainer.appendChild(card)
    }




}


loadAllPets()