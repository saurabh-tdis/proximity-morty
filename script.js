document.addEventListener('mouseover', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  
  const anc = document.getElementById('morty');
  const rect = anc.getBoundingClientRect();
  const ancX = rect.left + rect.width/2;
  const ancY = rect.top + rect.height/2;
  
  const angelDeg = angle(mouseX,mouseY,ancX,ancY);
  console.log(angelDeg);

  const eyes = document.querySelectorAll(".eye");
  eyes.forEach(e=>{
    e.style.transform=`rotate(${90+angelDeg}deg)`
    anc.style.filter = `hue-rotate(${angelDeg}deg)`
  })

});


function angle(mx,my,ax,ay){
  const dy = my-ay;
  const dx = mx-ax;
  const radi = Math.atan2(dy,dx);
  const deg = radi * 180 / Math.PI;
  return deg;
}