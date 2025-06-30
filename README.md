# Password Strength Checker

A simple web application that evaluates the strength of your password in real-time and provides actionable feedback to help you create stronger, more secure passwords.

## Features
- Real-time password strength evaluation
- Feedback on password length, character diversity, and common vulnerabilities
- Highlights use of dictionary words, common patterns, and sequences
- Clean, modern user interface
- Easy to use and understand

## How It Works
- Enter a password in the input field
- The app analyzes your password based on length, character types, and common patterns
- Strength is displayed with color and text, along with specific feedback

## Getting Started
1. **Clone the repository:**
   ```sh
   git clone https://github.com/theblackhatcomes/PassCheck.git
   cd PassCheck
   ```
2. **Open the app:**
   - Open `index.html` in your web browser

## Project Structure
- `index.html` - Main UI
- `style.css` - Styling
- `strengthChecker.js` - Password strength logic
- `README.md` - Project documentation

## Security Note
This checker runs entirely in your browser and does **not** send your password anywhere. For real-world applications, always use secure server-side password handling (hashing, salting, etc.).

## License
MIT 