const express = require('express');
var createError = require('http-errors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path')
const app = express();

//var hosts = require('./routes/hosts') hosts route
var user = require('./routes/user')

var cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));


var favicon = require('serve-favicon')
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

//app.use('/api/host', host);
app.use('/user', user);

if (process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'build', 'index.html'));
  });
}

var port = process.env.PORT || 3001
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

// mongoDB connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://giwada:Kagi@2512@cluster0-sz3pm.mongodb.net/test?retryWrites=true';
mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};

// render the error page
res.status(err.status || 500);
res.json({
  message: err.message,
  error: err
});
});


module.exports = app;