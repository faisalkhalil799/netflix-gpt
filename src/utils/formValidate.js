const formValidate = (username, email, password, isSignIn = false) => {
  const errors = {};

  const nameRegex = /^[A-Za-z ]{2,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{6,}$/;

  // Full Name validation (only when signing up)
  if (!isSignIn) {
    if (!username) {
      errors.username = "Full name is required";
    } else if (!nameRegex.test(username)) {
      errors.username =
        "Name should contain only letters and spaces (min 2 chars)";
    }
  }

  // Email validation
  if (!email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(email)) {
    errors.email = "Enter a valid email address";
  }

  // Password validation
  if (!password) {
    errors.password = "Password is required";
  } else if (!passwordRegex.test(password)) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};

export default formValidate;
