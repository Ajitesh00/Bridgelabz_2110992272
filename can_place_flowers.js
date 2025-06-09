var canPlaceFlowers = function(flowerbed, n) {
    if(flowerbed.length===1 && flowerbed[0]===0 && n===1) return true;
    for(let i=0;i<flowerbed.length;i++ && n>0){
        if(i===0 && flowerbed[i]===0 && flowerbed[i+1]==0){
            flowerbed[i]=1;
            n--;
        }
        else if(i===flowerbed.length-1 && flowerbed[i]===0 && flowerbed[i-1]===0){
            flowerbed[i]=1;
            n--;
        }
        else if(flowerbed[i]===0 && flowerbed[i-1]===0 && flowerbed[i+1]===0){
            flowerbed[i]=1;
            n--;
        }
    }
    console.log(flowerbed);
    if(n>0) return false;
    else return true;
};

console.log(canPlaceFlowers([1,0,1,0,0],1));