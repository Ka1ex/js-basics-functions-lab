// Code your solution in this file!
let headquarters =   42
let blockInFeet = 264
function distanceFromHqInBlocks(blocks){
   if (blocks > headquarters){
      return blocks - headquarters
   }
   if (blocks < headquarters){
      return headquarters - blocks
   }

}

let distanceFromHqInFeet = (block) => {
   if (block > headquarters){
      return (block - headquarters) * blockInFeet
   }
   if (block < headquarters){
      return (headquarters - block) * blockInFeet
   }


}
function distanceTravelledInFeet(start, end){
   if (start > end){
      return (start - end) * blockInFeet
   }
   if (start < end){
      return (end - start) * blockInFeet
   }
}
function calculatesFarePrice(start, destination) {
 let feet =  ((start > destination)? start - destination : destination - start) * blockInFeet
   console.log ((feet - 400) * .02)
 if (feet <= 400){
      return 0
   } if (feet <= 2000){
      return (feet - 400) * .02
   } if (feet > 2000 && feet < 2500){
      return 25
   } if (feet > 2500){
      return 'cannot travel that far'
   }
}
