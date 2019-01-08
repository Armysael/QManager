const electron = require('electron');
const url = require('url');
const path = require('path');
const fs = require('fs');


const {app, BrowserWindow, Menu} = electron;


let mainWindow;
let addWindow;


//create menu template
const mainMenuTemplate = [
{
	label:'File',
	submenu:[
	{
		label:'Add Item',
		click(){
			createAddWindow();
		}
	},
	{
		label:'Clear Items'
	},
	{
		label:'Quit', 
		accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
		click(){
			app.quit();
		}
	}
  ]
}
];


//listen for app to be ready
app.on('ready',function(){

//create new window
	mainWindow = new BrowserWindow({});
	//load html into window
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname,'app/html/mainWindow.html'),
		protocol:'file:',
		slashes: true

	}));
	//Quit app when closed
	mainWindow.on('closed',function(){
		app.quit();
	});

	//build menu from template
	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

	//Insert menu
	Menu.setApplicationMenu(mainMenu);

	mainWindow.webContents.on('did-finish-load',WindowsReady);


});

//if mac, add empty object to menu
if(process.platform == 'darwin'){
	mainMenuTemplate.unshift({});
}

// Add developer tools imtem if not in prod
if(process.env.NODE_ENV !=='production'){
	mainMenuTemplate.push({
		label:'Developer Tools',
		submenu:[{
			label: 'Toggle DevTools',
			accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
			click(item, focusedWindow){
				focusedWindow.toggleDevTools();
			}
		},
		{
			role: 'reload'
		},
		{
			label:'test',
			accelerator: process.platform == 'darwin' ? 'Command+H' : 'Ctrl+H',
			click(){
			
			  const text = 'xlsx'

			  fs.readdir(text, function(err,items){

			  	mainWindow.webContents.send('call-foo', items)
			  });
        // #1
        
        // #2
    //   mainWindow.webContents.executeJavaScript(`foo('${text}')`)

				/*
				const fs = require('fs');

				const DIRECTORY = './xlsx/';

				const filesInDir = fs.readdirSync(DIRECTORY);
				const filesToRemove = filesInDir.forEach(fileName => console.log(fileName));*/

//filesToRemove.forEach(fileName => fs.unlinkSync(fileName));
			}
		}
		]
	});
}


function WindowsReady() {
	
 //   callPNGFileNames();
}


function callPNGFileNames(){

	const minURL = 'app/resources/flags/png'

	fs.readdir(minURL, function(err,items){
			
	mainWindow.webContents.send('loadFlags', items)
			  });
	}
//Handle create add window
function createAddWindow(){

	addWindow = new BrowserWindow({
		width: 800,
		height: 600,
		title: 'Add Shopping List Item'
	});
	//load html into window
	addWindow.loadURL(url.format({
		pathname: path.join(__dirname,'../app/html/addWindow.html'),
		protocol:'file:',
		slashes: true

	}));
	//Garbage collecion handle
	addWindow.on('close',function(){
		addWindow = null;
	});
}


