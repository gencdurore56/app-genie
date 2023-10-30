/*
   Filename: complexCode.js
   Description: This code demonstrates a complex and sophisticated implementation of a web-based chat application.
*/

// Define a class for the chat application
class ChatApplication {
  constructor() {
    this.users = []; // Array to store connected users
    this.messages = []; // Array to store chat messages
  }

  // Method to add a new user to the chat
  addUser(user) {
    this.users.push(user);
    console.log(`User ${user} has joined the chat.`);
  }

  // Method to remove a user from the chat
  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
      console.log(`User ${user} has left the chat.`);
    }
  }

  // Method to send a message to the chat
  sendMessage(user, message) {
    const chatMessage = {
      user,
      message,
      timestamp: new Date()
    };
    this.messages.push(chatMessage);
    console.log(`[${chatMessage.timestamp}][${user}]: ${message}`);
  }

  // Method to display all the chat messages
  displayMessages() {
    console.log("--- Chat Messages ---");
    for (const message of this.messages) {
      console.log(`[${message.timestamp}][${message.user}]: ${message.message}`);
    }
  }
}

// Instantiate the chat application
const chatApp = new ChatApplication();

// Add some users to the chat
chatApp.addUser("Alice");
chatApp.addUser("Bob");
chatApp.addUser("Charlie");

// Send some messages
chatApp.sendMessage("Alice", "Hello, Bob!");
chatApp.sendMessage("Bob", "Hi, Alice!");
chatApp.sendMessage("Charlie", "Hey, guys!");

// Remove a user from the chat
chatApp.removeUser("Charlie");

// Display all the chat messages
chatApp.displayMessages();