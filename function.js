
function largestSegment (radius, segments) {
  radius.sort((a, b) => b - a);
  const areas = radius.map(r => r * r * Math.PI);
  return divideSegment(segments, areas, 0, areas.length - 1);
}


function divideSegment(segments, areas, lo, hi) {
  if(segments === 0 || lo > hi) return 0;
  if(segments === 1) return areas[lo];
  if(lo === hi) return areas[lo]/segments;

  let max = -1;
  for(let mid = lo; mid <= hi; mid ++) {
    for(let n = 1; n <= segments - 1; n ++) {
      const x = divideSegment(n, areas, lo, mid);
      const y = divideSegment(segments - n, areas, mid + 1, hi);
      max = Math.max(max, Math.min(x, y));
    }
  }
  return max.toFixed(4);
}

console.log(largestSegment([4,3,3], 3))


/*
-----    --------    
3    →   radius size n = 3
4    →   radius = [4, 3, 3]
3
3
3    →   segments = 3

28.2743
*/

/*
1    →   radius[] size n = 1
5    →   radius = [5]
5    →   segments = 5

15.7079
*/

/*
-----    --------    
3    →   radius size n = 2
4    →   radius = [6, 7]
3
3
3    →   segments = 12

21.9911
*/