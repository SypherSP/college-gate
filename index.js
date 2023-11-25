const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load your starting HTML file
    win.loadFile('views/guard.html');
}

app.whenReady().then(createWindow);
