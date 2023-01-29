// Pin generate
function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pinString;
    }else{
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('generate-pin').value = pin;
}

// Keypad field to input field
document.getElementById('key-pad').addEventListener('click', function(event){
    const newNumber = event.target.innerText;
    const inputField = document.getElementById('key-input');
    if(isNaN(newNumber)){
        if(newNumber  == 'C'){
            inputField.value = '';
        }
    }else{
        const inputFieldNumber = inputField.value;
        const addNumber = inputFieldNumber + newNumber;
        inputField.value = addNumber;
    }
    
})

// Verify Pin Number
function verifyPin(){
    const pin = document.getElementById('generate-pin').value;
    const inputField = document.getElementById('key-input').value;
    const successMessage = document.getElementById('success');
    const failMessage = document.getElementById('fail');
    if(pin == inputField){
        successMessage.style.display = 'block';
        failMessage.style.display = 'none';
    }else{
        failMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
}  
