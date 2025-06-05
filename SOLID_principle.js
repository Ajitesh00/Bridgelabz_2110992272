// S - Single Responsibility Principle

// --------GOOD--------
class User {
  constructor(name) {
    this.name = name;
  }
}

class UserLogger {
  log(user) {
    console.log(`User: ${user.name}`);
  }
}

// --------BAD--------

class User {
  constructor(name) {
    this.name = name;
    this.createdAt = new Date();
  }

  log() {
    console.log(`User: ${this.name}`);
  }
}


// O - Open/Closed Principle

// --------GOOD--------

class Notification {
  send(message) {
    // generic send
  }
}

class EmailNotification extends Notification {
  send(message) {
    console.log(`Sending email: ${message}`);
  }
}

// --------BAD--------
function sendNotification(type, message) {
  if (type === 'email') console.log('Sending email:', message);
  else if (type === 'sms') console.log('Sending SMS:', message);
}


// L - Liskov Substitution Principle

// --------GOOD--------
class Bird {
  fly() {
    console.log("Flying");
  }
}

class Sparrow extends Bird {}

const bird = new Sparrow();
bird.fly(); // works

// --------BAD-------

class Bird {
  fly() {}
}

class Ostrich extends Bird {
  fly() {
    throw new Error("Can't fly");
  }
}


// I - Interface Segregation Principle

// ---------GOOD--------

class Printer {
  print() {}
}

class Scanner {
  scan() {}
}

// ---------BAD--------

class MultiFunctionDevice {
  print() {}
  scan() {}
  fax() {}
}


// D - Dependency Inversion Principle

// --------GOOD--------

class EmailService {
  send(message) {
    console.log("Email sent:", message);
  }
}

class Notification {
  constructor(service) {
    this.service = service;
  }

  notify(message) {
    this.service.send(message);
  }
}

const service = new EmailService();
const notifier = new Notification(service);
notifier.notify("Hello!");

// ---------BAD---------

class Notification {
  notify(message) {
    const email = new EmailService(); // tight coupling
    email.send(message);
  }
}