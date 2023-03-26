export const getRandomIcon = (array) => {

    let newObject = {};
  
    const getRandomIndex = (key, value) => {
      const item = Math.floor(Math.random() * value.length);
      return array[key].at(item);
    }

  Object.keys(array).forEach(function(key) {
    newObject[key] = getRandomIndex(key, array[key]);
  })
  return newObject;
} 