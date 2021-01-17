var itemPrice = 3.87;
var amountOfMoneyInWallet = 50.00;
var numberOfFriends = 7;
var ageInYears = 33;
var firstName = 'Abby';
var lastName = 'Taylor';
var middleInitial = 'V';

var newAmountOfMoneyInWallet = (amountOfMoneyInWallet - itemPrice);
console.log(amountOfMoneyInWallet);

var numberOfFriendsMadePerYear = (ageInYears / numberOfFriends);
console.log(numberOfFriendsMadePerYear);

var fullName = (firstName + middleInitial + lastName);
console.log(fullName);

console.log('The amount I have left in my wallet is '+newAmountOfMoneyInWallet);
console.log('The number of friends I have made per year is: '+ numberOfFriendsMadePerYear);
console.log('My full name is: ' + fullName);
