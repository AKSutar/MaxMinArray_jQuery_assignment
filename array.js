
var numbers = [5.5 , 6 , 0.5 , 8 , 3 , 8 , 15 , 89.23 , 5 , 56 , 78 ];

var smallest_number = Math.min(...numbers);
var largest_number = Math.max(...numbers);

var x = "The given array :- " + numbers.toString();
$("#array").html(x);

$("#minNo").html("The smallest number in the array :- " + smallest_number);
$("#maxNo").html("The largest number in the array :- " + largest_number);














