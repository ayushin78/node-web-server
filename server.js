const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

app.set('view engine', 'hbs');


hbs.registerPartials(__dirname + '/views/partials')

// app.use((req, res, next)=>{
// 	var now = new Date().toString();
// 	var log = `${now}, ${req.method}, ${req.url}`;
// 	console.log(log);
// 	next();
// });

// app.use((req, res, next) => {
// 	res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle : 'ABout Page',
		currentYear : new Date().getFullYear()
	});
});

app.get('/projects', (req, res) => {
	res.render('projects.hbs', {
		pageTitle: 'projects',
		currentYear: new Date().getFullYear()
	});
});

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home',
		currentYear : new Date().getFullYear() 
	});
});

app.get('/bad', ((req, res) => {
	res.send({
		errorMessage : 'not found'
	});
}));
app.listen(port, () => {
	console.log(`The server is live at ${port}`);
});