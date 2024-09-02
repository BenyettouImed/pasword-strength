document.addEventListener('DOMContentLoaded', ()=>{
    const passWord = document.getElementById('passWord');
    const eye = document.getElementById('eye');

    eye.addEventListener('click', () => {
        if (passWord.type === 'password') {
            passWord.type = 'text';
            eye.classList.remove('fa-eye');
            
            eye.classList.add('fa-eye-slash');

        } else {
            passWord.type = 'password';
            eye.classList.add('fa-eye');
            
            eye.classList.remove('fa-eye-slash');
        }
    });


    passWord.addEventListener('input', (event) =>{
        let strongRegex = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[@&~#/*.\\<>;,$^!?]).{8,}$/g;
        let mediumRegex = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).{6,}$/g;
        let mediumRegex2 = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[@&~#/*.\\<>;,$^!?]).{6,}$/g;
        let mediumRegex3 = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@&~#/*.\\<>;,$^!?]).{6,}$/g;
        let mediumRegex4 = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[@&~#/*.\\<>;,$^!?]).{6,}$/g;
        let weakRegex = /^(?=.*?[a-z])(?=.*?[A-Z])$/g;
        
        let verify = strongRegex.test(passWord.value);
        if (verify){
            passWord.style.color = 'lime';
        }
        else if(mediumRegex.test(passWord.value) || mediumRegex2.test(passWord.value) || mediumRegex3.test(passWord.value) || mediumRegex4.test(passWord.value)){
            passWord.style.color = 'yellow';
        }
        else if(weakRegex.test(passWord.value)){
            passWord.style.color = 'red';
        }
        else{
            passWord.style.color = 'red';
        }
       
    })

})
