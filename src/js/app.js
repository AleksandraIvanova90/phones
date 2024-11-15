 export default function cleanPhoneNumber(phoneNumber) {
    // Удаление всех символов, кроме цифр
    let cleanedNumber = phoneNumber.replace(/\D/g, "");
    
    // Добавление кода страны +7, если его нет
    if (!/^(\+?7|8)/.test(cleanedNumber) || cleanedNumber.slice(1) == '9') {
        cleanedNumber = "+7" + cleanedNumber;
    } else if (cleanedNumber[1] == '9'){
        cleanedNumber = cleanedNumber.replace(/^(\+?7|8)/, "+7");
    } else {
        cleanedNumber = '+' + cleanedNumber

    }
    
    return cleanedNumber;
}

