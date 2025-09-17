const loadPetDetails = (modalCardId) => {
    const url = `https://openapi.programming-hero.com/api/peddy/pet/${modalCardId}`;
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(api => displayPetDetails(api.petData))
        .catch(err => console.log(err))
}

const displayPetDetails = (pet) => {
    console.log(pet)
    const petDetailsContainer = document.getElementById('pet-details-container');
    petDetailsContainer.innerHTML = `
        <div>
            <div><img class = 'w-full rounded-md' src="${pet.image ? pet.image : 'Missing'}" alt=""></div>
            <h3 class = 'text-2xl font-extrabold my-3'>${pet.pet_name ? pet.pet_name : 'Roshogolla'}</h3>
            <div class = 'flex md:flex-row flex-col  md:gap-10'>
                <div>
                    <div class="flex items-center gap-2 text-gray-500 font-bold">
                        <i class="fa-solid fa-table-cells-large"></i>
                        <p>Breed : ${pet.breed ? pet.breed : 'Unknown'}</p>
                    </div>
                    <div class="flex items-center gap-2 text-gray-500 font-bold">
                        <i class="fa-solid fa-mercury"></i>
                        <p>Gender : ${pet.gender ? pet.gender : 'Check The Pet'}</p>
                    </div>
                    <div class="flex items-center gap-2 text-gray-500 font-bold">
                        <i class="fa-solid fa-mercury"></i>
                        <p>Vaccinated status : ${pet.vaccinated_status ? pet.vaccinated_status : 'Unknown'}</p>
                    </div>
                </div>

                <div>
                    <div class="flex items-center gap-2 text-gray-500 font-bold">
                        <i class="fa-solid fa-box"></i>
                        <p>Birth : ${pet.date_of_birth ? pet.date_of_birth : 'Unknown'}</p>
                    </div>
                    <div class="flex items-center gap-2 text-gray-500 font-bold">
                        <i class="fa-solid fa-dollar-sign"></i>
                        <p>Price : ${pet.price ? pet.price : '950 $'} $</p>
                    </div> 
                </div>
            </div>
        </div>

        <div class = 'border-b-1 border-gray-300 mt-5'></div>

        <h1 class = 'text-base font-bold mt-3'>Details Information</h1>
        <p class = 'text-sm my-3 text-gray-500'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
        <li class = 'text-sm ml-5 text-gray-500'>The point of using is that it has a more-or-less normal distribution of letters, as opposed to using.</li>
    `;


    document.getElementById('pets_modal').showModal()
}


