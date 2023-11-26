const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load your starting HTML file
    win.loadFile('views/admin/logs.html');
}

app.whenReady().then(createWindow);
