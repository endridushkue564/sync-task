/*
Filename: complexCode.js

Description: This code demonstrates a complex JavaScript implementation of a web-based ticket booking system for a cinema. It includes features such as user authentication, seat selection, pricing, payment processing, and ticket generation.

Author: Your Name

Date: [current date]

*/

// Constants
const MAX_SEATS = 50;
const BASE_TICKET_PRICE = 10.0;
const TAX_RATE = 0.1;

// Global variables
let userLoggedIn = false;
let selectedSeats = [];
let totalPrice = 0.0;

// Objects and Arrays
let users = [
    {
        email: 'user1@example.com',
        password: 'password1',
        name: 'John Doe',
        isAdmin: true
    },
    {
        email: 'user2@example.com',
        password: 'password2',
        name: 'Jane Smith',
        isAdmin: false
    }
];

let seatAvailability = Array(MAX_SEATS).fill(true);

// Functions
function login(email, password) {
    // Check if the user exists
    const user = users.find(user => user.email === email);

    if (user && user.password === password) {
        userLoggedIn = true;
        console.log('Logged in successfully!');
    } else {
        console.log('Invalid email or password.');
    }
}

function logout() {
    userLoggedIn = false;
    console.log('Logged out successfully!');
}

function selectSeat(seatNumber) {
    if (!userLoggedIn) {
        console.log('Please log in first.');
        return;
    }

    if (selectedSeats.includes(seatNumber)) {
        console.log('You have already selected this seat.');
        return;
    }

    if (!seatAvailability[seatNumber]) {
        console.log('This seat is not available.');
        return;
    }

    selectedSeats.push(seatNumber);
    totalPrice += BASE_TICKET_PRICE;

    console.log('Seat selected successfully.');
}

function unselectSeat(seatNumber) {
    if (!userLoggedIn) {
        console.log('Please log in first.');
        return;
    }

    const index = selectedSeats.indexOf(seatNumber);

    if (index === -1) {
        console.log('You have not selected this seat.');
        return;
    }

    selectedSeats.splice(index, 1);
    totalPrice -= BASE_TICKET_PRICE;

    console.log('Seat unselected successfully.');
}

function calculateTotalPrice() {
    const total = totalPrice * (1 + TAX_RATE);
    return total.toFixed(2);
}

function processPayment(paymentMethod) {
    if (!userLoggedIn) {
        console.log('Please log in first.');
        return;
    }

    if (selectedSeats.length === 0) {
        console.log('Please select at least one seat.');
        return;
    }

    console.log('Payment processed successfully!');
    generateTicket();
    clearSelection();
}

function generateTicket() {
    const ticket = {
        movie: 'Example Movie',
        seats: selectedSeats,
        price: calculateTotalPrice()
    };

    console.log('Ticket generated:');
    console.log(ticket);
}

function clearSelection() {
    selectedSeats = [];
    totalPrice = 0.0;

    console.log('Seat selection cleared.');
}

// Usage Example
login('user1@example.com', 'password1');
selectSeat(3);
selectSeat(5);
selectSeat(7);
console.log('Total Price:', calculateTotalPrice());
processPayment('credit-card');
logout();