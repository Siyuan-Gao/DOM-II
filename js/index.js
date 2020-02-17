// Your code goes here

const links = document.querySelector('.logo-heading')

links.addEventListener('mouseover',()=>{
  links.style.transform = "scale(1.25)";
  links.style.transition = "all 0.3s";
}
)

links.addEventListener('mouseleave',()=>{
  links.style.transform = "scale(0.9)";
  links.style.transition = "all 0.3s";
}
)



const body1 = document.querySelector('body');
  body1.addEventListener('click',(event)=> {
    body1.style.backgroundColor = 'hotpink';

  }
)




let bottomContent = document.querySelector('.content-pick')
  bottomContent.addEventListener( 'dblclick',(event) =>{
    bottomContent.style.backgroundColor ='papayawhip';
    // event.stopPropagation();

  }
  )

// body1.forEach(bgc =>{
//   bgc.addEventListener('keydown', ()=>{
//   if(bgc.style.backgroundColor === 'papayawhip'){
//     bgc.style.backgroundColor = "white";
//   } else{
//     bgc.style.backgroundColor = 'papayawhip';
//   }
//   });
// });


let footer = document.querySelector('footer');
footer.addEventListener("mouseenter", (event)=> {
  event.target.style.cssText = " border: 3px dashed green"; 
}
)


footer.addEventListener('mouseout', (event) =>{
  event.target.style.backgroundColor = 'purple';
}
);
// cssText = "color: blue; border: 1px solid black"; 


let stop = document.querySelectorAll('nav-link')
stop.addEventListener('resize',(event)=>{
  event.target.style.cssText = "background-color:pink;font-size:55px;border:2px dashed green;color:white;"
  event.preventDefault()
})