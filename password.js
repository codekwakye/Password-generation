function generateRandomPassword(length) {
    const charset = "ascnkdksaljhbdbhbhayuyehbrhfrjnvASDFGHJNVZBXVCQWERTYU123456789FEFHS123456";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

