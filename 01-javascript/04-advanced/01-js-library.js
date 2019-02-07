var _ = {
    map: function(array, callback) {
      for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
      }
    },
    reduce: function(array, callback, rem){
        let numb = 0;
        if (!rem){
          rem = array[0];
          numb = 1;
        }
        for (let i = numb; i < array.length; i++) {
          rem = callback(array[i], rem);
        }
        return rem;
  
    },
    find: function(array, callback) {
      for (let i = 0; i < array.length; i++) {
        if (callback(array[i])){
          return array[i];
        }
      }
    },
    filter: function(array, callback) {
      const newArray = [];
      for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
          newArray.push(array[i]);
        }
      }
      return newArray;
    },
    reject: function(array, callback) {
      const newArray = [];
      for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
          newArray.push(array[i]);
        }
      }
      return newArray;
    },
  }