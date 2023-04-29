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

const TICKET_STATE = {};

function createTicket(
  eventType,
  title,
  dateTime,
  description,
  members,
  place,
  priority,
  extra
) {
  const { icon, name, bgColor } = EVENT_TYPES[eventType];

  const month = dateTime
    .toLocaleString("en-US", { month: "short" })
    .toUpperCase();
  const date = dateTime.toLocaleString("en-US", { day: "2-digit" });
  const weekday = dateTime
    .toLocaleString("en-US", { weekday: "short" })
    .toUpperCase();
  const time = dateTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  });

  const allData = {
    icon,
    weekday,
    time,
    title,
    bgColor,
    name,
    month,
    date,
    description,
    members,
    place,
    priority,
    extra,
    id: Math.floor(Math.random() * 100),
  };

  let ticketCard = document.createElement("div");
  ticketCard.className = "ticket";

  renderBasicTicket(ticketCard, allData);

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
      renderDetails(ticketCard, allData);
      ticketExpandedEl.appendChild(ticketCard);
    } else if (ticketCard.className === "ticket ticket-revert") {
      ticketCard.className = "ticket";
      renderBasicTicket(ticketCard, allData);
      ticketList.appendChild(ticketCard);
    }
  });
}

function renderDetails(ticket, allData) {
  const {
    icon,
    weekday,
    time,
    title,
    bgColor,
    name,
    month,
    date,
    description,
    members,
    place,
    priority,
    extra,
    id,
  } = allData;

  let badgeEl = "";

  if (TICKET_STATE[id]) {
    const stateColor = TICKET_STATE[id] === "accepted" ? "#36b27e" : "#ff8f73";
    badgeEl = `<div id="final-state">
    <h1 style='color: ${stateColor}'>
    ${TICKET_STATE[id].toUpperCase()}!
    </h1>
    </div>`;
  } else {
    badgeEl = `<div id="ticket-tear-container">
    <div id="decline-badge">
      <h1>↪︎DECLINE</h1>
    </div>
    <div id="accept-badge">
      <h1>ACCEPT↩︎</h1>
    </div>
  </div>`;
  }

  ticket.innerHTML = `<div class="ticket-full-details">
    <div id="ticket-details-container">
      <p class="event-tag-top" style="background-color: ${bgColor};">${name}</p>
      <div id="details-header">
        <div class="details-icon"><img src="resources/${icon}"></div>
        <div class="details-title-desc">
          <h1>${title}</h1>
          <p>${description}</p>
        </div>
        <div class="details-qr">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=88x88&data=${title}_${description}_${place}_${date}_${month}_${weekday}_${time}" alt="qr-code">
        </div>
      </div>
      <div id="details-mid">
        <div id="details-mid-left">
          <div class="details-mid-left-toprow">
            <div class="details-mid-members">
              <p>MEMBERS</p>
              <h1>${members}</h1>
            </div>
            <div class="details-mid-extra">
              <p>${extra.key}</p>
              <h1>${extra.value}</h1>
            </div>
            <div class="details-mid-priority">
              <p>PRIORITY</p>
              <h1>${priority}</h1>
            </div>
          </div>
          <div class="details-mid-left-bottomrow">
            <h2>${place}</h2>
          </div>
        </div>
        <div id="details-mid-right">
          <div class="details-mid-datetime">
            <h1 id="time">${time}</h1>
            <h1 id="date">${month}${date}</h1>
          </div>
          <div class="details-mid-day">
            <h1>${weekday}</h1>
          </div>
        </div>
      </div>
    </div>
    ${badgeEl}
  </div>`;

  const tearContainer = document.getElementById("ticket-tear-container");
  const declineBadge = document.getElementById("decline-badge");
  const acceptBadge = document.getElementById("accept-badge");

  let mouseClickedElement = "";

  if (tearContainer) {
    declineBadge.addEventListener("mousedown", (event) => {
      mouseClickedElement = "decline-badge";
    });

    acceptBadge.addEventListener("mousedown", (event) => {
      mouseClickedElement = "accept-badge";
    });

    tearContainer.addEventListener("mousemove", (event) => {
      const containerRect = event.target.getBoundingClientRect();
      const relativeY = event.clientY - containerRect.top;
      const relativeX = event.clientX - containerRect.left;
      let degreeRotated = relativeY / 20;

      if (mouseClickedElement === "decline-badge") {
        tearContainer.style.transformOrigin = `554px 8px`;
        tearContainer.style.transform = `rotateZ(-${degreeRotated}deg)`;

        if (degreeRotated > 6) {
          tearContainer.className = "animate-ticket-tear";
          TICKET_STATE[id] = "declined";
        }
      } else if (mouseClickedElement === "accept-badge") {
        tearContainer.style.transformOrigin = `8px 8px`;
        tearContainer.style.transform = `rotateZ(${degreeRotated}deg)`;

        if (degreeRotated > 6) {
          tearContainer.className = "animate-ticket-tear";
          TICKET_STATE[id] = "accepted";
        }
      }
    });

    tearContainer.addEventListener("mouseup", (event) => {
      mouseClickedElement = "";
    });

    tearContainer.addEventListener("animationend", () => {
      console.log(TICKET_STATE);
      tearContainer.remove();

      const finalStateEl = document.createElement("div");
      finalStateEl.id = "final-state";
      const stateColor =
        TICKET_STATE[id] === "accepted" ? "#36b27e" : "#ff8f73";

      finalStateEl.innerHTML = `<h1 style='color: ${stateColor}'>
    ${TICKET_STATE[id].toUpperCase()}!
    </h1>`;

      document
        .getElementById("ticket-details-container")
        .appendChild(finalStateEl);
    });
  }
}

function renderBasicTicket(ticket, allData) {
  const {
    icon,
    weekday,
    time,
    title,
    bgColor,
    name,
    month,
    date,
    description,
    members,
    place,
    priority,
    extra,
  } = allData;

  ticket.innerHTML = `
  <div class="t-icon"><img src="resources/${icon}"></div>
  <div class="t-body"><div class="t-details">
  <p class="day-time">${weekday} ${time}</p>
  <p class="event-title">${title}</p></div>
  <p class="event-type" style="background-color: ${bgColor};">
  ${name}</p></div>
  <div class="date-card"><p class="month">${month}</p>
  <p class="date">${date}</p>
  </div>`;
}

createTicket(
  "event",
  "Coldplay Mumbai!",
  new Date(2023, 2, 5, 10, 30),
  "This is a music event in Mumbai",
  3,
  "P Ground, Navi Mumbai, Near Airport",
  "H",
  { key: "Seat", value: "14A" }
);

createTicket(
  "movie",
  "Avengers 8",
  new Date(2023, 3, 7, 12, 45),
  "Avengers: End Game Volume 2, The beginning",
  6,
  "Royal Cinemas, Cinepolis, Aundh, Pune",
  "L",
  { key: "Seat", value: "12D" }
);

createTicket(
  "calendar",
  "Engg. All Hands",
  new Date(2023, 6, 23, 11, 30),
  "All hands meeting for all members of Helpshift",
  54,
  "Damogran, Helpshift Studios, Pune",
  "H",
  { key: "Tag", value: "Zoom" }
);

createTicket(
  "travel",
  "Flight: aus to del",
  new Date(2023, 2, 1, 16, 30),
  "Vistara Q313, from Australia To Delhi, layover: Dubai 4hrs",
  5,
  "Adelaide International Airport, AU",
  "H",
  { key: "Seat", value: "14A" }
);

createTicket(
  "event",
  "Le Plaisir Dinner",
  new Date(2023, 5, 13, 18, 30),
  "Dinner date with Wife",
  2,
  "P Ground, Navi Mumbai, Near Airport",
  "H",
  { key: "Tag", value: "Dinner" }
);

createTicket(
  "hotel",
  "Trident Jaipur",
  new Date(2023, 5, 29, 16, 30),
  "Hotel stay during visit to Rajasthan",
  2,
  "Amer Rd, Jal Mahal, Amer, Rajasthan",
  "H",
  { key: "Room", value: "301" }
);

// document.getElementsByClassName("ticket")[0].click();
