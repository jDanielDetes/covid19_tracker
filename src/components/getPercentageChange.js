

export function getPercentageChange(oldNumber, newNumber){
    var decreaseValue = newNumber - oldNumber;
    var percentage = (decreaseValue / oldNumber) * 100
  
    return Math.floor(percentage)
}