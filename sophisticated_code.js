// sophisticated_code.js

/*
This code is a sophisticated implementation of a social media platform, implementing various features and functionalities.
It includes user authentication, profile management, post creation, editing, and interaction functionalities.

Please note that this is a simplified version of a social media platform and is only aimed at showcasing a complex JavaScript code example.
*/

// Constants
const MAX_POST_LENGTH = 280;
const MAX_NOTIFICATIONS = 50;

// User Class
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.loggedIn = false;
    this.posts = [];
    this.notifications = [];
  }

  login() {
    // Simulate login API call
    console.log(`Logging in ${this.username}`);
    this.loggedIn = true;
  }

  logout() {
    // Simulate logout API call
    console.log(`Logging out ${this.username}`);
    this.loggedIn = false;
  }

  createPost(content) {
    if (this.loggedIn) {
      if (content.length <= MAX_POST_LENGTH) {
        this.posts.push(content);
        console.log(`${this.username} created a new post: ${content}`);
      } else {
        console.log(`Post exceeds maximum length of ${MAX_POST_LENGTH} characters.`);
      }
    } else {
      console.log(`User ${this.username} is not logged in.`);
    }
  }

  editPost(postIndex, newContent) {
    if (this.loggedIn) {
      if (postIndex >= 0 && postIndex < this.posts.length) {
        if (newContent.length <= MAX_POST_LENGTH) {
          this.posts[postIndex] = newContent;
          console.log(`${this.username} edited post #${postIndex}: ${newContent}`);
        } else {
          console.log(`Post exceeds maximum length of ${MAX_POST_LENGTH} characters.`);
        }
      } else {
        console.log(`Invalid post index: ${postIndex}`);
      }
    } else {
      console.log(`User ${this.username} is not logged in.`);
    }
  }

  likePost(postIndex) {
    if (this.loggedIn) {
      if (postIndex >= 0 && postIndex < this.posts.length) {
        console.log(`${this.username} liked post #${postIndex}: ${this.posts[postIndex]}`);
      } else {
        console.log(`Invalid post index: ${postIndex}`);
      }
    } else {
      console.log(`User ${this.username} is not logged in.`);
    }
  }

  addNotification(notification) {
    if (this.notifications.length < MAX_NOTIFICATIONS) {
      this.notifications.push(notification);
      console.log(`${this.username} received a new notification: ${notification}`);
    } else {
      console.log(`User ${this.username} has reached the maximum number of notifications.`);
    }
  }

  viewNotifications() {
    console.log(`Notifications for ${this.username}:`);
    this.notifications.forEach((notification, index) => {
      console.log(`${index + 1}. ${notification}`);
    });
  }
}

// Usage example
const user1 = new User("JohnDoe", "password123");
user1.login();
user1.createPost("Hello, world!");
user1.editPost(0, "Hello, universe!");
user1.likePost(0);
user1.addNotification("New friend request");

const user2 = new User("JaneSmith", "qwerty");
user2.login();
user2.createPost("This is my first post!");
user2.likePost(0);
user2.likePost(0);
user2.addNotification("You have a new follower");
user2.viewNotifications();

user1.logout();

console.log("Code execution completed.");