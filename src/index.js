// const ticketList = document.getElementById("ticketList");
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
// ticketList.append(ticketCard);

// const ticketCard = document.getElementById("ticketCard");
// ticketCard.addEventListener("click", () => {
//   ticketCard.classList.add("magictime", "spaceOutRight");
// });

const EVENT_TYPES = {
  calendar: {
    icon: "calendar.svg",
    name: "CALENDAR",
    bgColor: "#D1BAEF",
  },
  event: {
    icon: "event.svg",
    name: "EVENT",
    bgColor: "#B0F2B4",
  },
  hotel: {
    icon: "hotel.svg",
    name: "HOTEL",
    bgColor: "#FFD991",
  },
  movie: {
    icon: "movie.svg",
    name: "MOVIE",
    bgColor: "#AED9E0",
  },
  travel: {
    icon: "travel.svg",
    name: "TRAVEL",
    bgColor: "#F2BAC9",
  },
};

function createTicket(eventType, title, dateTime) {
  const { icon, name, bgColor } = EVENT_TYPES[eventType];

  const month = dateTime
    .toLocaleString("en-US", { month: "short" })
    .toUpperCase();
  const date = dateTime.toLocaleString("en-US", { day: "2-digit" });
  const weekday = dateTime
    .toLocaleString("en-US", { weekday: "long" })
    .toUpperCase();
  const time = dateTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });

  let ticketCard = document.createElement("div");
  ticketCard.innerHTML = `
  <div class="t-icon"><img src="resources/${icon}"></div>
  <div class="t-body"><div class="t-details">
  <p class="day-time">${weekday} ${time}</p>
  <p class="event-title">${title}</p></div>
  <p class="event-type" style="background-color: ${bgColor};">
  ${name}</p></div>
  <div class="date-card"><p class="month">${month}</p>
  <p class="date">${date}</p>
  </div>`;

  ticketCard.className = "ticket";
  const ticketList = document.getElementById("ticketList");
  ticketList.appendChild(ticketCard);

  const cardContainerEl = document.getElementById("cardContainer");

  ticketCard.addEventListener("click", () => {
    if (ticketCard.className === "ticket") {
      const ticketExpandedEl = document.getElementById("ticket-expanded");

      ticketCard.style.top = `-${ticketCard.offsetTop - 8}px`;
      ticketCard.className = "ticket ticket-intermediate";

      if (ticketExpandedEl.children.length) {
        const oldTicket = ticketExpandedEl.children[0];
        oldTicket.className = "ticket ticket-revert";
        oldTicket.style.top = `${ticketList.offsetHeight - 246}px`; // 104 height + 104 height + 19 px(8px + 8px margin + 3px border) + 19px
      }

      if (cardContainerEl.id === "cardContainer") {
        cardContainerEl.setAttribute("id", "cardContainerExpanded");
      }
    }
  });

  ticketCard.addEventListener("transitionend", () => {
    console.log("transitionEnd");
    ticketCard.style.top = "0px";
    if (ticketCard.className === "ticket ticket-intermediate") {
      ticketCard.className = "ticket ticket-expanded";
      const ticketExpandedEl = document.getElementById("ticket-expanded");
      ticketExpandedEl.appendChild(ticketCard);
    } else if (ticketCard.className === "ticket ticket-revert") {
      ticketCard.className = "ticket";
      ticketList.appendChild(ticketCard);
    }

    // ticketCard.className = "ticket ticket-expanded-new";
  });
}

function renderDetails(ticket) {
  ticket.innerHTML = "";
}

function renderMain() {}

createTicket("event", "Coldplay Mumbai!", new Date(2023, 2, 5, 10, 30));
createTicket("movie", "Avengers 8", new Date(2023, 3, 7, 12, 45));
createTicket("calendar", "Engg. All Hands", new Date(2023, 6, 23, 11, 30));
createTicket("travel", "Flight: aus to del", new Date(2023, 2, 1, 16, 30));
createTicket("event", "Le Plaisir Dinner", new Date(2023, 2, 13, 16, 30));
createTicket("hotel", "Trident Jaipur", new Date(2023, 5, 29, 16, 30));
