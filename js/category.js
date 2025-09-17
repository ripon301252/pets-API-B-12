const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(api => displayCategories(api.categories))
        .catch(err => console.log(err))
}

const displayCategories = (buttons) => {
    // console.log(buttons)
    const categoryContainer = document.getElementById('category-container')
    categoryContainer.innerHTML = '';
    for (let button of buttons) {
        // console.log(button)
        const categoryBtn = document.createElement('div');

        categoryBtn.innerHTML = `
            
                <button id= "btn-${button.category}" onclick = "loadPetId('${button.category}')"  class=" flex items-center gap-2 bg-white hover:bg-[#e7f2f2] shadow-md py-3 px-8 w-full border-1 border-gray-300 rounded-lg cursor-pointer category-btn">
                        <img src="${button.category_icon}" alt="" class=" md:w-fit w-8 md:h-fit flex justify-center items-center">
                        <span class="font-semibold md:text-2xl text-base  text-center">${button.category}</span>
                    
                </button>
        `;

        categoryContainer.appendChild(categoryBtn);
    }
}





loadCategories()





// document.getElementById('category-container').addEventListener('click', (e) => {
//     if (e.target.className.includes('pet-title')) {
//         // console.log(e.target.className)
//         handleButtonClick(e.target)
//     }
// })