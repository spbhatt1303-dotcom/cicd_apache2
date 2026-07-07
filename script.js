const words=['MERN Stack Developer','AWS & DevOps Learner','Cloud Enthusiast'];
let w=0,c=0,el=document.getElementById('typing');
function type(){if(!el)return; if(c<words[w].length){el.textContent+=words[w][c++];setTimeout(type,90);}else setTimeout(erase,1200);}
function erase(){if(c){el.textContent=words[w].slice(0,--c);setTimeout(erase,40);}else{w=(w+1)%words.length;setTimeout(type,300);}}
type();