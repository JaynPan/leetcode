// * 大樂透號碼產生器，號碼從 1 - max 取 6 個值，每一個值不會重複
// Time: O(6 + max)，產出 rangeOfInt
// Space: O(max)
function lotteryRandom6(max) {
  if(max < 6) return 'max should greater than 6';

  const res = [];
  const rangeOfInt = Array.from({ length: max }).map((_, i) => i + 1);

  const getRandomInt = () => {
    const randomIdx = Math.floor(Math.random() * rangeOfInt.length);
    const chosenInt = rangeOfInt[randomIdx];

    rangeOfInt.splice(randomIdx, 1);
    return chosenInt;
  }

  for(let i = 0; i < 6; i++) {
    res.push(getRandomInt());
  }

  return res;
}

console.log(lotteryRandom6(6));
console.log(lotteryRandom6(10));
console.log(lotteryRandom6(5));
console.log(lotteryRandom6(33));