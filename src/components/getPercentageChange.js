export function getPercentageChange(oldNumber, newNumber){
    var decreaseValue = oldNumber - newNumber;
    var percentage = (decreaseValue / oldNumber) * 100
  
    return Math.floor(percentage)
}