function validate(username, password) {
    // Check for injection patterns in the password
    if (password.includes('||') || password.includes('//')) {
      return "Wrong username or password!";
    }
    
    var database = new Database();
    return database.login(username, password);
  }
  