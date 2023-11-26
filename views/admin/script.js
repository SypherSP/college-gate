const data = [
  {
    "serial": 1,
    "name": "Bob Brown",
    "roll": "LCS2020101",
    "mobile": "123456812",
    "time": "10:44 AM",
    "entryExit": "Exit",
    "status": "Approved"
  },
  {
    "serial": 2,
    "name": "John Doe",
    "roll": "LCS2020102",
    "mobile": "123458303",
    "time": "03:41 PM",
    "entryExit": "Exit",
    "status": "Approved"
  },
  {
    "serial": 3,
    "name": "John Doe",
    "roll": "LCS2020103",
    "mobile": "123456090",
    "time": "11:41 AM",
    "entryExit": "Exit",
    "status": "Rejected"
  },
  {
    "serial": 4,
    "name": "Jane Smith",
    "roll": "LCS2020104",
    "mobile": "123455814",
    "time": "06:08 AM",
    "entryExit": "Entry",
    "status": "Approved"
  },
  {
    "serial": 5,
    "name": "Emma Davis",
    "roll": "LCS2020105",
    "mobile": "123459686",
    "time": "05:18 PM",
    "entryExit": "Entry",
    "status": "Rejected"
  },
  {
    "serial": 6,
    "name": "Alice Johnson",
    "roll": "LCS2020106",
    "mobile": "123451857",
    "time": "01:38 PM",
    "entryExit": "Entry",
    "status": "Approved"
  },
  {
    "serial": 7,
    "name": "Emma Davis",
    "roll": "LCS2020107",
    "mobile": "123459805",
    "time": "01:39 AM",
    "entryExit": "Entry",
    "status": "Approved"
  },
  {
    "serial": 8,
    "name": "Alice Johnson",
    "roll": "LCS2020108",
    "mobile": "123451401",
    "time": "05:04 AM",
    "entryExit": "Entry",
    "status": "Rejected"
  },
  {
    "serial": 9,
    "name": "Alice Johnson",
    "roll": "LCS2020109",
    "mobile": "123451960",
    "time": "10:38 PM",
    "entryExit": "Exit",
    "status": "Approved"
  },
  {
    "serial": 10,
    "name": "Bob Brown",
    "roll": "LCS20201010",
    "mobile": "123457715",
    "time": "07:03 PM",
    "entryExit": "Exit",
    "status": "Rejected"
  },
  {
    "serial": 11,
    "name": "Bob Brown",
    "roll": "LCS20201011",
    "mobile": "123459801",
    "time": "04:23 AM",
    "entryExit": "Exit",
    "status": "Approved"
  },
  {
    "serial": 12,
    "name": "Emma Davis",
    "roll": "LCS20201012",
    "mobile": "123452152",
    "time": "02:41 AM",
    "entryExit": "Exit",
    "status": "Approved"
  },
  {
    "serial": 13,
    "name": "Emma Davis",
    "roll": "LCS20201013",
    "mobile": "123458187",
    "time": "03:06 AM",
    "entryExit": "Exit",
    "status": "Approved"
  },
  {
    "serial": 14,
    "name": "Jane Smith",
    "roll": "LCS20201014",
    "mobile": "123453841",
    "time": "08:29 AM",
    "entryExit": "Entry",
    "status": "Approved"
  },
  {
    "serial": 15,
    "name": "Emma Davis",
    "roll": "LCS20201015",
    "mobile": "123454242",
    "time": "02:24 AM",
    "entryExit": "Entry",
    "status": "Approved"
  },
  {
    "serial": 16,
    "name": "Emma Davis",
    "roll": "LCS20201016",
    "mobile": "123454368",
    "time": "09:33 AM",
    "entryExit": "Entry",
    "status": "Approved"
  },
  {
    "serial": 17,
    "name": "Jane Smith",
    "roll": "LCS20201017",
    "mobile": "123456870",
    "time": "04:22 AM",
    "entryExit": "Entry",
    "status": "Rejected"
  },
  {
    "serial": 18,
    "name": "Alice Johnson",
    "roll": "LCS20201018",
    "mobile": "123457408",
    "time": "06:39 AM",
    "entryExit": "Exit",
    "status": "Approved"
  },
  {
    "serial": 19,
    "name": "John Doe",
    "roll": "LCS20201019",
    "mobile": "123452805",
    "time": "11:50 AM",
    "entryExit": "Exit",
    "status": "Approved"
  },
  {
    "serial": 20,
    "name": "Alice Johnson",
    "roll": "LCS20201020",
    "mobile": "123454522",
    "time": "12:52 AM",
    "entryExit": "Exit",
    "status": "Rejected"
  }
];

function fetchLogData() {
  // Simulated data fetching. Replace this with actual data fetching logic.
  return data;
}

function updateTable() {
  const logData = fetchLogData();
  const tableBody = document
    .getElementById("log-table")
    .getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ""; // Clear existing rows

  logData.forEach((record, index) => {
    let row = tableBody.insertRow();
    row.insertCell(0).innerHTML = record.serial;
    row.insertCell(1).innerHTML = record.name;
    row.insertCell(2).innerHTML = record.roll;
    row.insertCell(3).innerHTML = record.mobile;
    row.insertCell(4).innerHTML = record.time;
    row.insertCell(5).innerHTML = record.entryExit;
    row.insertCell(6).innerHTML = record.status;
  });
}

// Initial table update
updateTable();
// ... Existing JavaScript to update the table ...
function sortTableByColumn(columnIndex) {
  const table = document.getElementById("log-table");
  const tbody = table.getElementsByTagName("tbody")[0];
  const rows = Array.from(tbody.getElementsByTagName("tr"));

  const isAscending = tbody.getAttribute("data-sort-ascending") === "true";
  rows.sort((rowA, rowB) => {
    const cellA = rowA.getElementsByTagName("td")[columnIndex].textContent;
    const cellB = rowB.getElementsByTagName("td")[columnIndex].textContent;

    // Adjust sorting logic if needed (e.g., for dates or numbers)
    const compare = isAscending
      ? cellA.localeCompare(cellB)
      : cellB.localeCompare(cellA);

    return columnIndex === 0 || columnIndex === 2 ? compare * -1 : compare; // Numeric sort for Serial Number and Roll Number
  });

  // Toggle sort direction for the next click
  tbody.setAttribute("data-sort-ascending", !isAscending);

  // Append sorted rows back to the table
  rows.forEach((row) => tbody.appendChild(row));
}

function applyFilters() {
  // Get filter values
  const filterDate = document.getElementById("filter-date").value;
  const filterName = document.getElementById("filter-name").value.toLowerCase();
  const filterRoll = document.getElementById("filter-roll").value;
  const filterEntryExit = document.getElementById("filter-entry-exit").value;
  const filterStatus = document.getElementById("filter-status").value;

  // Filter logic
  const tableBody = document
    .getElementById("log-table")
    .getElementsByTagName("tbody")[0];
  Array.from(tableBody.rows).forEach((row) => {
    const [serial, name, roll, mobile, time, entryExit, status] = row.cells;
    const dateOfRow = new Date(time.textContent).toDateString();
    const filterDateStr = new Date(filterDate).toDateString();

    // Apply filters
    const isDateMatch = filterDate === "" || dateOfRow === filterDateStr;
    const isNameMatch = name.textContent.toLowerCase().includes(filterName);
    const isRollMatch = roll.textContent.includes(filterRoll);
    const isEntryExitMatch =
      entryExit.textContent === filterEntryExit || filterEntryExit === "";
    const isStatusMatch =
      status.textContent === filterStatus || filterStatus === "";

    row.style.display =
      isDateMatch &&
      isNameMatch &&
      isRollMatch &&
      isEntryExitMatch &&
      isStatusMatch
        ? ""
        : "none";
  });
}

function updateTime() {
  const now = new Date();
  const dateString = now.toLocaleDateString();
  const timeString = now.toLocaleTimeString(); // Adjust format as needed
  document.querySelector('.time').textContent = dateString + " " + timeString;
}

// Update time every second
setInterval(updateTime, 1000);

// Initialize with current time
updateTime();