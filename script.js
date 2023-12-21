// Sample data for events (replace this with your data)
const eventsData = [
  { title: "Event 1", description: "Description for Event 1" },
  { title: "Event 2", description: "Description for Event 2" },
  // Add more events...
];

// Function to display events
function displayEvents(events) {
  const eventsContainer = document.getElementById("events");

  events.forEach(event => {
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");

    const title = document.createElement("div");
    title.classList.add("event-title");
    title.textContent = event.title;

    const description = document.createElement("div");
    description.classList.add("event-description");
    description.textContent = event.description;

    eventCard.appendChild(title);
    eventCard.appendChild(description);
    eventsContainer.appendChild(eventCard);
  });
}

// Search functionality (example)
document.getElementById("search").addEventListener("input", function(event) {
  const searchTerm = event.target.value.toLowerCase();
  const filteredEvents = eventsData.filter(event =>
    event.title.toLowerCase().includes(searchTerm) ||
    event.description.toLowerCase().includes(searchTerm)
  );

  document.getElementById("events").innerHTML = "";
  displayEvents(filteredEvents);
});

// Display initial events
displayEvents(eventsData);
