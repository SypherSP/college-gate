function fetchLogData() {
  // Simulated data fetching. Replace this with actual data fetching logic.
  return [{
    serial: 1,
    name: "Emma Davis",
    roll: 1001,
    mobile: "123456597",
    time: "02:13 PM",
    entryExit: "Entry",
    status: "Rejected",
  }];
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
