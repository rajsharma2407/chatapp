const body = document.querySelector('.body');
const form = document.querySelector('form');
const socket = io('/');
const height = document.querySelector('.body');

const prompt = window.prompt('Your Name');

console.log(prompt)
socket.emit('user',prompt)
const sound = new Audio('sound.mp3');
socket.on('sound',()=>{
    sound.play();
})
socket.on('message',message=>{
    msgOutput(message);
    // console.log(message.username)
    
})

const msgOutput = (msg) =>{
    if(msg.username == prompt){
        float='right';
    }else{
        float='left';
    }
    var div = document.createElement(`div`);

    div.innerHTML = `<span>${msg.username}</span> <span style="float:right">${msg.time}</span>
    <p>${msg.text}</p>
    `;
    div.classList.add(`text`);
    div.classList.add(`${float}`);
    body.append(div);

    height.scrollTop = height.scrollHeight;

}
window.onload = function(){
    document.querySelector('#msg').focus();
}
form.addEventListener('submit',(e) =>{
    e.preventDefault();
    var msg = e.target.elements.msg;

    socket.emit('chatroom',msg.value);
    msg.value = "";
    msg.focus();
    
}
);
