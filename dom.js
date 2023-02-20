document.getElementById('apply-bg').addEventListener('click',function(){
    const friends = document.getElementsByClassName('friend')

   for (const f of friends ){
    f.style.backgroundColor='red'
   }
});

document.getElementById('center').addEventListener('click',function(){
console.log(9090);
const center = document.getElementById('f-3');
center.style.textAlign = 'center'

});
document.getElementById('add-new').addEventListener('click',function(){

    const conatiner = document.getElementById('frnd');
    const friend = document.createElement('div');
    friend.innerHTML= `
    <h3> added </h3>
    <p> hi bro </p>
    
    `
    conatiner.appendChild(friend)
})