//alert('It is linked')

//VARIABLES
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const URLtwo = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin';
const URLthree = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka'


const $getCocktailbtn = $('.getCocktailbtn')

//FUNCTIONS

const getCocktail = () =>{
    $.ajax(URL).then(function (data){
        
        console.log(data)
        console.log(data.drinks[0].strIngredient1)
        $cocktailName.text(data.drinks[0].strDrink)
        $ingredient.text(data.drinks[0].strIngredient1)
        $('main').append(`<img src="${data.drinks[0].strDrinkThumb}"/>`)
    })
    
};

//ELEMENT REFERENCES
const $cocktailName = $('#cocktailName')
const $ingredient = $('#ingredient');
const $form = $('form');
const $input = $(`input[type="text"]`);

//EVENT LISTENERS
$getCocktailbtn.on('click',getCocktail);