// const cardBody = document.getElementById("cardBody");
// const ticketCard = document.createElement("div");
// ticketCard.className = "ticket-card";
// ticketCard.innerHTML = `
// <div class="header">Col1</div>
// <div class="body">
//     <div>
//         <p class="date-time">WEDNESDAY, 6:30PM</p>
//         <p class="title">Catch up with Friends</p>
//     </div>
//     <p class="event-type" style="background-color: #d1baef;">CALENDAR</p>
// </div>
// <div class="calendar">
//     <p class="month">Mar</p>
//     <p class="date">21</p>
// </div>`;
// cardBody.append(ticketCard);

const ticketCard = document.getElementById("ticketCard");
ticketCard.addEventListener("click", () => {
  ticketCard.classList.add("magictime", "spaceOutRight");
});
