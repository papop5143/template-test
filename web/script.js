
function randomnumber(){
    let rndnum = Math.floor(Math.random() * 899999 + 100000);
    let userinput = document.getElementById('usip').value;
    document.getElementById('random').innerHTML = 'random number is'+' '+ rndnum ;
    document.getElementById('usernum').innerHTML = 'your number is' +' '+ userinput ;
    document.getElementById('check').innerHTML = chechking();
    function chechking(){
    if (rndnum == userinput){
        return 'wow you are lucky as fuck!!';}
        else {
            return 'haha don\'t be sad. it\'s only normal.'
        }
    }}


