//   /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm

function verifyEmailAddress(email) {
    var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if(email.length > 0) {
        if ((email !== "" && emailFormat.test(email))){
            return true;
        }
    }
    return false;
}

function verifyPhoneNumber(phoneNumber){

}

function verifyPassword(password){

}

export {verifyEmailAddress, verifyPhoneNumber, verifyPassword}