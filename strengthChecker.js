function checkPasswordStrength(password) {
    let score = 0;
    const feedback = [];

    // 1. Length
    if (password.length < 6) {
        feedback.push("Too short (min 6 characters)");
        score -= 25;
    } else if (password.length >= 6 && password.length < 8) {
        feedback.push("Consider a longer password (8+ chars)");
        score += 10;
    } else if (password.length >= 8 && password.length < 12) {
        score += 20;
    } else if (password.length >= 12) {
        score += 40;
    }

    // 2. Character Diversity
    let hasLowercase = /[a-z]/.test(password);
    let hasUppercase = /[A-Z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    let hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(password);

    let charTypes = 0;
    if (hasLowercase) charTypes++;
    if (hasUppercase) charTypes++;
    if (hasNumber) charTypes++;
    if (hasSymbol) charTypes++;

    if (charTypes < 3) {
        feedback.push("Use a mix of uppercase, lowercase, numbers, and symbols.");
    }

    if (hasLowercase) score += 10;
    if (hasUppercase) score += 10;
    if (hasNumber) score += 10;
    if (hasSymbol) score += 15;

    // 3. Common Patterns / Dictionary Words
    const commonPatterns = [
        "password", "123456", "qwerty", "admin", "111111", "abcdef",
    ];
    for (const pattern of commonPatterns) {
        if (password.toLowerCase().includes(pattern)) {
            feedback.push(`Avoid common patterns like "${pattern}"`);
            score -= 30;
            break;
        }
    }

    // 4. Repetitive characters / Sequential characters
    if (/(.)\1{2,}/.test(password)) {
        feedback.push("Avoid repeating characters.");
        score -= 15;
    }
    const commonSequences = ["abc", "def", "123", "234", "qwe", "asd", "zxc"];
    for (const seq of commonSequences) {
        if (password.toLowerCase().includes(seq) || password.toLowerCase().includes(seq.split('').reverse().join(''))) {
            feedback.push(`Avoid common sequences like "${seq}"`);
            score -= 15;
            break;
        }
    }

    // --- Determine Strength Level ---
    let strength = "Very Weak";
    let color = "red";
    if (score < 20) {
        strength = "Very Weak";
        color = "red";
    } else if (score >= 20 && score < 40) {
        strength = "Weak";
        color = "orange";
    } else if (score >= 40 && score < 60) {
        strength = "Medium";
        color = "yellowgreen";
    } else if (score >= 60 && score < 80) {
        strength = "Strong";
        color = "green";
    } else {
        strength = "Very Strong";
        color = "darkgreen";
    }
    if (password.length === 0) {
        strength = "Enter a password";
        color = "gray";
        feedback.length = 0;
    }
    return {
        score: Math.max(0, score),
        strength: strength,
        color: color,
        feedback: feedback.length > 0 ? feedback : ["Good job!"],
    };
} 