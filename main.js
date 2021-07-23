//common
let S_arr = (r) =>{for(var f,n,o=r.length;0!==o;)n=Math.floor(Math.random()*o),f=r[--o],r[o]=r[n],r[n]=f;return r};


//Maths

let MM = (min,max) => Math.floor(Math.random()*(max-min))+min;