
 function q_sort(arr){
  if(arr.length<=1){
      return arr
  }
  const pivot = arr[arr.length-1]
  const leftArr = []
  const rightArr = []
  for (let i=0; i<arr.length-1; i++){
      if(arr[i]<pivot){
          leftArr.push(arr[i])
      }else{
          rightArr.push(arr[i])
      }
  }
  if(leftArr.length>0 && rightArr.length>0){
      return [...q_sort(leftArr), pivot, ...q_sort(rightArr)]
  }else if(leftArr.length>0){
      return [...q_sort(leftArr), pivot]
  }else{
      return [pivot,...q_sort(rightArr)]
  }
 }
 const arr = [1234,544,42,25,123,46,9,23,0,11,44,1,0]
 console.log(arr)
 console.log(q_sort(arr))

