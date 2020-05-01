module.exports = {
  succeed,
  fail,
  repair,
  get,
  item,
};

function error(err){
  this.error = err
}


//Item Name
//Item durability is from 0-20
//Item enhancement is from 0-100

const sword = {
  name: 'Grass Sword',
  durability: 30,
  enhancement: 20
}

const shield = {
  name: 'Hylian shield',
  durability: 50,
  enhancement: 15
}

const power = {
  name: 'Invisibility',
  durability: 100,
  enhancement: 14
}

//old object cannot have same results as new

// function object((item) => {
//   const foo = 50;
//   return {...item, foo}
// })



function succeed(item) {
  if (item.enhancement < 20 && item.enhancement > 0){
    return { ...item, enhancement: item.enhancement + 1 } 
  } else {return { ...item, enhancement: item.enhancement}};
  //enhancement increases by 1
  //if at 20 no change
  //no change to durability
}


function fail(item) {
  if (item.enhancement < 15 && item.enhancement > 0  && item.durability >= 5){
    return { ...item, durability: item.durability - 5 };
  } else if ( item.enhancement >= 15 && item.enhancement <= 16 && item.durability >= 10){
    return { ...item, durability: item.durability - 10};
  } else if (item.enhancement > 16 ) {
    return { ...item, enhancement: item.enhancement - 1}
  } else{
    throw new error('cant go below 0');
  }
  //if item *enhancement < 15 decrease *durability by 5
  //if item *enhancement >= 15 decrease *durability by 10
  //if item *enhancement> 16 decrease *enhancement by 1
}



function repair(item) {
   const newItem = item;
  if (newItem.durability < 100){
    return { ...newItem, durability: 100 };
  }
  //return new item with durability = 100
}


function item(item){
  if (item.name === "" || item.name === null) {
    throw new error('item needs a name');
  }
  return { ...item };
}

function get(item) {
  return { ...item };
}

