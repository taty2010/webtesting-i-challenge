module.exports = {
  succeed,
  fail,
  repair,
  get,
};



//Item Name
//Item durability is from 0-20
//Item enhancement is from 0-100

const item1 = {
  durability: 50,
  enhancement: 20
}

const item2 = {
  durability: 50,
  enhancement: 15
}

function succeed(item) {
  if (item.enhancement < 20 ){
    return { ...item, enhancement: item.enhancement + 1 } 
  }
  // return { ...item };
  //enhancement increases by 1
  //if at 20 no change
  //no change to durability
}

// function fail(item) {
//   return { ...item };
//   //if item *enhancement < 15 decrease *durability by 5
//   //if item *enhancement >= 15 decrease *durability by 10
//   //if item *enhancement> 16 decrease *enhancement by 1
// }

function repair(item) {
  let newItem = item
  if (newItem.durability < 100){
    return { ...newItem, durability: 100 };
  }
  //return new item with durability = 100
}

function get(item) {
  return { ...item };
}

