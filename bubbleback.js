const arr=[12,3,41,2,3,9,1]

function sort(arr){
    let tmp
    
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]<arr[j+1]){
                tmp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=tmp
            }
        }
    }
}

sort(arr)

console.log(arr)
