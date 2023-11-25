const QRCode = require('qrcode');

function generateQRCode(studentData) {
    // Convert student data to a string
    const dataString = JSON.stringify(studentData);

    // Generate QR Code
    QRCode.toFile('XYZ2020XXX.png', dataString)
    return QRCode.toDataURL(dataString);
}

data = {
    "name": "John Doe",
    "roll_no": "XYZ2020XXX"
}

generateQRCode(data);
