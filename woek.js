//if given sum is equal to sum of any two elements in the array, 
//function need to return true; otherwise function need to return false.
function returnSum(sum,array){
            var lett = array.concat(arr[0]);
                for(i=0;i<lett;i++){
                    for(j=i+1;j<lett;j++){
                        if(lett[i]+lett[j]===sum){
                        return true;
                        }}}}
Console.log(returnSum(3, [1,2,3,6]));