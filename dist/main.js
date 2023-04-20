/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ () => {
        eval(
          '// const ticketList = document.getElementById("ticketList");\n// const ticketCard = document.createElement("div");\n// ticketCard.className = "ticket-card";\n// ticketCard.innerHTML = `\n// <div class="header">Col1</div>\n// <div class="body">\n//     <div>\n//         <p class="date-time">WEDNESDAY, 6:30PM</p>\n//         <p class="title">Catch up with Friends</p>\n//     </div>\n//     <p class="event-type" style="background-color: #d1baef;">CALENDAR</p>\n// </div>\n// <div class="calendar">\n//     <p class="month">Mar</p>\n//     <p class="date">21</p>\n// </div>`;\n// ticketList.append(ticketCard);\n\n// const ticketCard = document.getElementById("ticketCard");\n// ticketCard.addEventListener("click", () => {\n//   ticketCard.classList.add("magictime", "spaceOutRight");\n// });\n\nconst EVENT_TYPES = {\n  calendar: {\n    icon: "calendar.svg",\n    name: "CALENDAR",\n    bgColor: "#D1BAEF",\n  },\n  event: {\n    icon: "event.svg",\n    name: "EVENT",\n    bgColor: "#B0F2B4",\n  },\n  hotel: {\n    icon: "hotel.svg",\n    name: "HOTEL",\n    bgColor: "#FFD991",\n  },\n  movie: {\n    icon: "movie.svg",\n    name: "MOVIE",\n    bgColor: "#AED9E0",\n  },\n  travel: {\n    icon: "travel.svg",\n    name: "TRAVEL",\n    bgColor: "#F2BAC9",\n  },\n};\n\nfunction createTicket(eventType, title, dateTime) {\n  const { icon, name, bgColor } = EVENT_TYPES[eventType];\n\n  const month = dateTime\n    .toLocaleString("en-US", { month: "short" })\n    .toUpperCase();\n  const date = dateTime.toLocaleString("en-US", { day: "2-digit" });\n  const weekday = dateTime\n    .toLocaleString("en-US", { weekday: "long" })\n    .toUpperCase();\n  const time = dateTime.toLocaleString("en-US", {\n    hour: "numeric",\n    minute: "numeric",\n  });\n\n  const ticketCard = document.createElement("div");\n  ticketCard.innerHTML = `\n  <div class="t-icon"><img src="resources/${icon}"></div>\n  <div class="t-body"><div class="t-details">\n  <p class="day-time">${weekday} ${time}</p>\n  <p class="event-title">${title}</p></div>\n  <p class="event-type" style="background-color: ${bgColor};">\n  ${name}</p></div>\n  <div class="date-card"><p class="month">${month}</p>\n  <p class="date">${date}</p>\n  </div>`;\n\n  ticketCard.className = "ticket";\n  const ticketList = document.getElementById("ticketList");\n  ticketList.appendChild(ticketCard);\n\n  ticketCard.addEventListener("click", () => {\n    ticketCard.className = "ticket animate-expand";\n    console.log(ticketCard);\n  });\n}\n\ncreateTicket("event", "Coldplay Mumbai!", new Date(2023, 2, 5, 10, 30));\ncreateTicket("movie", "Avengers 8", new Date(2023, 3, 7, 12, 45));\n// createTicket("calendar", "Engg. All Hands", new Date(2023, 6, 23, 11, 30));\n// createTicket("travel", "Flight: aus to del", new Date(2023, 2, 1, 16, 30));\n// createTicket("event", "Le Plaisir Dinner", new Date(2023, 2, 13, 16, 30));\n// createTicket("hotel", "Trident Jaipur", new Date(2023, 5, 29, 16, 30));\n//createTicket("event", "Coldplay Mumbai!", new Date(2023, 2, 5, 10, 30));\n//createTicket("movie", "Avengers 8", new Date(2023, 3, 7, 12, 45));\n//createTicket("calendar", "Engg. All Hands", new Date(2023, 6, 23, 11, 30));\n//createTicket("travel", "Flight: aus to del", new Date(2023, 2, 1, 16, 30));\n// createTicket("event", "Le Plaisir Dinner", new Date(2023, 2, 13, 16, 30));\n//createTicket("hotel", "Trident Jaipur", new Date(2023, 5, 29, 16, 30));\n\n\n//# sourceURL=webpack://realistic-ticket-ui/./src/index.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = {};
  /******/ __webpack_modules__["./src/index.js"]();
  /******/
  /******/
})();
