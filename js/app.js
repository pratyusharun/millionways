function openLearnModal(){

document
.getElementById("learnModal")
.style.display = "flex";

}

function closeLearnModal(){

document
.getElementById("learnModal")
.style.display = "none";

}

const bubble =
document.querySelector('.nav-bubble');

const links =
document.querySelectorAll('.nav-links a');

links.forEach(link=>{

    link.addEventListener('mouseenter',()=>{

        bubble.style.width =
        link.offsetWidth + 'px';

        bubble.style.left =
        link.offsetLeft + 'px';

    });

});

// Default position on page load

window.addEventListener('load',()=>{

    bubble.style.width =
    links[0].offsetWidth + 'px';

    bubble.style.left =
    links[0].offsetLeft + 'px';

});

const chat=document.getElementById('chat');

function bot(text){
const d=document.createElement('div');
d.className='bot';
d.innerText=text;
chat.appendChild(d);
chat.scrollTop=chat.scrollHeight;
}

function scrollToServices() {
  document
    .getElementById("services")
    .scrollIntoView({
      behavior: "smooth"
    });
}

function scrollToAbout() {
  document
    .getElementById("about")
    .scrollIntoView({
      behavior: "smooth"
    });
}

function scrollToContact() {
  document
    .getElementById("contact")
    .scrollIntoView({
      behavior: "smooth"
    });
}

function scrollToHome() {

document
.querySelector(".hero")
.scrollIntoView({
behavior:"smooth"
});

}

function user(text){
const d=document.createElement('div');
d.className='user';
d.innerText=text;
chat.appendChild(d);
chat.scrollTop=chat.scrollHeight;
}

function startButtons(){

const div=document.createElement('div');
div.className='options';

div.innerHTML=`
<button class="option" onclick="yes()">Yes</button>
<button class="option" onclick="nope()">No</button>
`;

chat.appendChild(div);
}

function yes(){

document.querySelector('.options').remove();

user('Yes');

setTimeout(()=>{
bot('Great! Which field are you interested in?');
fields();
},500);

}

function fields(){

const div=document.createElement('div');
div.className='options';

const list=[
'Banking & Finance',
'Insurance',
'IT',
'Sales',
'Marketing',
'HR',
'Operations'
];

list.forEach(item=>{

const btn=document.createElement('button');
btn.className='option';
btn.innerText=item;

btn.onclick=()=>{

user(item);

const msg=encodeURIComponent(
`Hello Million Ways, I am looking for a job in ${item}.`
);

setTimeout(()=>{
window.location.href=
`https://wa.me/918002369222?text=${msg}`;
},800);

};

div.appendChild(btn);

});

chat.appendChild(div);
}

function nope(){

user('No');
}

setTimeout(()=>{
bot('👋 Welcome to Million Ways');
},500);

setTimeout(()=>{
bot('Are You Looking For A Job?');
startButtons();
},1300);

/* 3D TILT */

const card=document.querySelector('.chat-window');

card.addEventListener('mousemove',(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const centerX=rect.width/2;
const centerY=rect.height/2;

const rotateY=(x-centerX)/18;
const rotateX=(centerY-y)/18;

card.style.transform=
`perspective(1200px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)`;

});

card.addEventListener('mouseleave',()=>{

card.style.transform=
'perspective(1200px) rotateX(0) rotateY(0) scale(1)';

});

function openCareerModal(){

document
.getElementById("careerModal")
.style.display = "flex";

}

function closeCareerModal(){

document
.getElementById("careerModal")
.style.display = "none";

}

window.addEventListener("DOMContentLoaded",()=>{

document
.getElementById("careerForm")
.addEventListener(
"submit",
async function(e){

e.preventDefault();

const payload = {

name:
document.getElementById("name").value,

phone:
document.getElementById("phone").value,

email:
document.getElementById("email").value,

current_organization:
document.getElementById("current_org").value,

previous_organization:
document.getElementById("previous_org").value,

field:
document.getElementById("field").value,

experience:
document.getElementById("experience").value,

ctc:
document.getElementById("ctc").value,

state:
document.getElementById("state").value

};

try{

const response =
await fetch(

"https://millionways-api.pratyusharun6.workers.dev/",

{
method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:
JSON.stringify(payload)
}

);

if(response.ok){

document
.getElementById("careerForm")
.style.display = "none";

document
.getElementById("successMessage")
.style.display = "block";

window.turnstile?.reset();

}else{

const text =
await response.text();

if(response.status === 409){

alert("Profile already registered.");

}else{

alert(text);

}

}

}catch(err){

alert(
"Unable to submit profile."
);

}

});
});