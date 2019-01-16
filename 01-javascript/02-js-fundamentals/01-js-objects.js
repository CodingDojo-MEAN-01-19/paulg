//Challenge 1
function challenge1(students) {
    for (var item of students) {
        console.log(`name: ${ students.name }, cohort: ${ students.cohort }`)
    };
};
 
var students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

challenge1(students);


//Challenge 2

var users = {
    employees: [
        { 'first_name':  'Miguel', 'last_name' : 'Jones' },
        { 'first_name' : 'Ernie', 'last_name' : 'Bertson' },
        { 'first_name' : 'Nora', 'last_name' : 'Lu' },
        { 'first_name' : 'Sally', 'last_name' : 'Barkyoumb '}
    ],
    managers: [
        { 'first_name' : 'Lillian', 'last_name' : 'Chambers' },
        { 'first_name' : 'Gordon', 'last_name' : 'Poe '}
    ]
};
function challenge2(users) {
    for (var key in users) {
        for (let i = 0; i < users[key].length; i++) {
            var num = i + 1;
            var fname = users[key][i].first_name;
            var lname = users[key][i].last_name;
            var length = fname.length + lname.length;
            console.log(`${num} - ${lname}, ${fname} - ${length}`);
        }
    };
};

challenge2(users)