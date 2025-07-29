const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const showResult = document.getElementById('result');

checkBtn.addEventListener('click', function(){
    if(textInput.value === ''){
        alert('Please input a value');
    }
    else {
        const cleanInput = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, '');

        const isPalindrome = cleanInput === cleanInput.split('').reverse().join(''); 

        showResult.classList.remove('hidden');

        if(isPalindrome){
         showResult.innerHTML = `${textInput.value} is  a palindrome`;
        } else{
            showResult.innerHTML = `${textInput.value} is not a palindrome`;
        }
    }
});
    