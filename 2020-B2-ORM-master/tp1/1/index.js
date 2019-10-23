const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    /*const placegood = input[100]
   if (placegood <=100) {
     return(input)
   }*/

   /*input.sort(function(a, b){
    if(a.input > b.input)
        return -1;
    if(a.input < b.input)
        return 1;
    return 0;
});
   
    for(var i in input) {
    if(i != 0 && input[i].input == input[i-1].input)  
        input[i].classement = input[i-1].classement;
    else                                            
        input[i].classement = i+1;
}*/

/*var classement = 0

if (classement =1 && classement <=100){
  return(input[100])
}*/

    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}