
let nav=document.querySelector('.nav');
let section=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('wrap nav a');
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top< offset +height){
            navlinks.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('wrap nav a[href*=' +id +']').classList.add('active');
            });
        };
            

    });

    // Sticky navbar
    let header=document.querySelector('wrap')
//   header.classList.toggle('sticky',window.scrollY > 100)
//    toggle icon  and navbar when click navbar link(scroll)

};

function send(){
    window.alert("Your Request has been sended")
}
// function myfunc(){
//     let dots=document.getElementById("dots");
//     let more=document.getElementById("more");
//     let btntext=document.getElementById("mybtn");


//     if(dots.style.display!="none"){
//         dots.style.display=="none";
//         more.style.display="inline";
//         btntext.innerHTML="Read Less";
        
//     }
//     else{
//         dots.style.display="inline";
//         more.style.display=="none";
//         btntext.innerHTML="Read More";
       
//     }
// }
// Scroll reveal
