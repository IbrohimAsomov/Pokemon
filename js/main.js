// slice Pocemon array
var pokemonList = pokemons.slice(0, 151)
var elList = document.querySelector("#list");

    for (var item of pokemonList) {
        var newItem = document.createElement("LI");
        newItem.setAttribute("class", "col-2 text-center bg-white");

        var newItemImg = document.createElement("IMG");

        elList.appendChild(newItem);
        newItem.appendChild(newItemImg);

        var newItemImg = document.createElement("IMG");
        newItemImg.setAttribute("src", `http://www.serebii.net/pokemongo/pokemon/${item.num}.png`)
        newItemImg.setAttribute("alt", "Pokemon heros images");
        newItemImg.setAttribute("class", "mb-2");
        newItem.appendChild(newItemImg);
        
        var itemTitle = document.createElement("h2");
        itemTitle.textContent = (item.name)
        itemTitle.setAttribute("class", "mb-3")
        newItem.appendChild(itemTitle)
        
        var newTitle = document.createElement("h5");
        newTitle.textContent = (item.type)
        newTitle.setAttribute("class", "mb-2 h-5")
        newItem.appendChild(newTitle)
        
        var pokemosnWeight = document.createElement("h5")
        pokemosnWeight.textContent = (item.weight)
        pokemosnWeight.setAttribute("class", "mb-2 h-5")
        newItem.appendChild(pokemosnWeight)
        
        
        var pokemosnHeight = document.createElement("h5")
        pokemosnHeight.textContent = (item.height)
        pokemosnHeight.setAttribute("class", " h-5")
        newItem.appendChild(pokemosnHeight)
    }



