module.exports = function (){
    return {
      add: function(num1, num2) { 
           num1 + num2
      },
      multiply: function(num1, num2) {
           num1 * num2
      },
      square: function(num) {
           num * num
      },
      random: function(num1, num2) {
        Math.floor(Math.random() * (num1 - num2 + 1) ) + num2;
      }
    }
  };
  