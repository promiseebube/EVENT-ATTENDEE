// Initialize an empty array to store attendees
let attendees = [];

// Function to add a new attendee
function addAttendee() {
    const nameInput = document.getElementById('attendeeNameInput');
    const name = nameInput.value.trim();
    const addedAttendeeInput = document.getElementById('addedAttendee');

    if (name) {
        attendees.push(name);
        addedAttendeeInput.value = name; // Show added attendee
        nameInput.value = ''; // Clear input field
        document.getElementById('message').textContent = `${name} has been added.`;
        alert(`${name} has been added.`); // Show alert
        listAttendees(); // Refresh the attendee list
    } else {
        document.getElementById('message').textContent = 'Please enter a name.';
        alert('Please enter a name.'); // Show alert
    }
}

// Function to search for an attendee
function findAttendee() {
    const searchInput = document.getElementById('searchNameInput');
    const name = searchInput.value.trim();
    const searchedAttendeeInput = document.getElementById('searchedAttendee');
    const messageElement = document.getElementById('message');

    if (attendees.includes(name)) {
        searchedAttendeeInput.value = name; // Show searched attendee
        messageElement.textContent = `${name} is in the list.`;
        alert(`${name} is in the list.`); // Show alert
    } else {
        searchedAttendeeInput.value = ''; // Clear if not found
        messageElement.textContent = `${name} is not found.`;
        alert(`${name} is not found.`); // Show alert
    }
}

// Function to remove an attendee
function removeAttendee() {
    const removeInput = document.getElementById('removeNameInput');
    const name = removeInput.value.trim();
    const removedAttendeeInput = document.getElementById('removedAttendee');
    const index = attendees.indexOf(name);

    if (index !== -1) {
        attendees.splice(index, 1); // Remove attendee
        removedAttendeeInput.value = name; // Show removed attendee
        removeInput.value = ''; // Clear input field
        document.getElementById('message').textContent = `${name} has been removed.`;
        alert(`${name} has been removed.`); // Show alert
        listAttendees(); // Refresh the attendee list
    } else {
        removedAttendeeInput.value = ''; // Clear if not found
        document.getElementById('message').textContent = `${name} is not found.`;
        alert(`${name} is not found.`); // Show alert
    }
}

// Function to list all attendees
function listAttendees() {
    const attendeeList = document.getElementById('attendeeList');
    attendeeList.innerHTML = attendees.length > 0 ? attendees.join(', ') : 'No attendees registered.';
}
