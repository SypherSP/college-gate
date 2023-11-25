const scanner = new Html5Qrcode("qr-reader");

let studentData;
const qrCodeDiv = document.getElementById('qr-reader');
const infoBox = document.getElementById('qr-reader-info');
function onScanSuccess(decodedText, decodedResult) {
    // Assuming the QR code contains a JSON string of student data
    studentData = JSON.parse(decodedText);
    console.log(studentData);
    qrCodeDiv.classList.add('hidden');
    displayStudentData(studentData);
    scanner.stop() // Stop the scanner
    .catch(e => console.error(`Error stopping scanner: ${e}`));
}

function onScanFailure(error) {
    console.error(`QR Code scanning failed. Error: ${error}`);
}
function resumeScanner() {
    infoBox.classList.add('hidden');
    qrCodeDiv.classList.remove('hidden');
    scanner.start({ facingMode: "environment" }, { fps: 10, qrbox: 250 }, onScanSuccess, onScanFailure)
    .catch(e => console.error(`Error resuming scanner: ${e}`));
}

resumeScanner();

function displayStudentData(data) {
    const infoDiv = document.getElementById('student-info');
    
    infoBox.classList.remove('hidden');
    infoDiv.innerHTML = `<p><strong>Name:</strong> ${data.name}</p>
                         <p><strong>Roll Number:</strong> ${data.roll_no}</p>`;
}

document.getElementById('approve-entry').addEventListener('click', function() {
    // Logic to approve entry/exit
    if (currentStudentData) {
        console.log('Entry/Exit Approved', currentStudentData);
        // Send currentStudentData to your backend
        updateStatus(studentData, 'Approved');
    }
    // Here you would typically send a request to your backend
    resumeScanner();
});

document.getElementById('deny-entry').addEventListener('click', function() {
    // Logic to deny entry/exit
    if (currentStudentData) {
        console.log('Entry/Exit Declined', currentStudentData);
        // Send currentStudentData to your backend
        updateStatus(studentData, 'Decline');
    }
    // Similar to approve, send a request to your backend
    
    resumeScanner();
});


function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString(); // Adjust format as needed
    document.querySelector('.time').textContent = timeString;
}

// Update time every second
setInterval(updateTime, 1000);

// Initialize with current time
updateTime();
