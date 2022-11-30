const functionTest = require("./main");

const inputValue = "What";

let newsList = functionTest.newsList;

function search() {

  //inputValue is the variable that contains the search string
  //const inputValue = document.getElementById("search-input").value;
  let result = [];
  const searchKo = inputValue.toLocaleLowerCase();
  
  //Code for Search Function
  for (let item in newsList){
    if(newsList[item].toString().toLocaleLowerCase().indexOf(searchKo)!=-1){
      result.push(newsList[item])
    }
  }

    return newsList = result;
}

//PASSED

test("Check if the search result is correct", () => {
  expect(search()).toEqual([
    'What films should an aspiring journalist watch?',
    'What books should an aspiring journalist read?',
    'What z'
  ]);
});

//PASSED

test("Check if result is ascending", () => {
  const asc = "ascending";
  const inAscending = functionTest.newsList.sort();
  expect(functionTest.sort(asc)).toEqual(inAscending);
})

//PASSED

test("Check if result is descending", () => {
  const shouldDescend = "meow";
  const inDescending = functionTest.newsList.reverse();
  expect(functionTest.sort(shouldDescend)).toEqual(inDescending);
})






