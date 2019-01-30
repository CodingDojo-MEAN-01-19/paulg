function Fibonacci() {
    var count1 = 0;
    var count2 = 1;
    
    function addition() {
        var add = count1
        count1 = count2
        count2 = add + count2
        console.log(count1)
    };

    return addition
};

var maths = Fibonacci()

maths()
maths()
maths()
maths()
maths()