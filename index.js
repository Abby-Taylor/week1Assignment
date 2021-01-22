var itemPrice = 3.87;
var amountOfMoneyInWallet = 50.00;
var numberOfFriends = 7;
var ageInYears = 33;
var firstName = 'Abby';
var lastName = 'Taylor';
var middleInitial = 'V';

amountOfMoneyInWallet = amountOfMoneyInWallet - itemPrice;
console.log(amountOfMoneyInWallet);

numberOfFriends = ageInYears / numberOfFriends;
console.log(numberOfFriends);

console.log(firstName + middleInitial + lastName);

console.log('The amount I have left in my wallet is '+amountOfMoneyInWallet);
console.log('The number of friends I have made per year is: '+ numberOfFriends);
console.log('My full name is: ' + firstName + middleInitial + lastName);