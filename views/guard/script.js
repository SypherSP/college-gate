const scanner = new Html5Qrcode("qr-reader");

function onScanSuccess(decodedText, decodedResult) {
    // Assuming the QR code contains a JSON string of student data
    const studentData = JSON.parse(decodedText);
    console.log(studentData);
    displayStudentData(studentData);
    scanner.clear();
}

function onScanFailure(error) {
    console.error(`QR Code scanning failed. Error: ${error}`);
}

scanner.start({ facingMode: "environment" }, { fps: 10, qrbox: 250 }, onScanSuccess, onScanFailure)
    .catch(e => console.error(e));

function displayStudentData(data) {
    const infoDiv = document.getElementById('student-info');
    infoDiv.innerHTML = `<p><strong>Name:</strong> ${data.name}</p>
                         <p><strong>Roll Number:</strong> ${data.roll_no}</p>`;
}

document.getElementById('approve-entry').addEventListener('click', function() {
    // Logic to approve entry/exit
    console.log('Entry/Exit Approved');
    // Here you would typically send a request to your backend
});

document.getElementById('deny-entry').addEventListener('click', function() {
    // Logic to deny entry/exit
    console.log('Entry/Exit Denied');
    // Similar to approve, send a request to your backend
});
