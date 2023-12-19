//   /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm

function verifyEmailAddress(email) {
    var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if ((email !== "" && emailFormat.test(email))){
        return true;
    }
    return false;
}

function verifyAge(age){
    return age > 120 || age < 0 ? false : true;
}

function verifyPhoneNumber(phoneNumber){

}

function funConfirmPassword(password,confirmPassword){
    return password === confirmPassword
}

function verifyPassword(password){

}

export {verifyEmailAddress, verifyPhoneNumber, funConfirmPassword, verifyPassword}