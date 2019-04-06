const express = require('express'),
      app = express(),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      passport = require('passport');
      API_PORT = 3001;

// requiring router
const campRoutes = require('./routes/camps');
const indexRoutes = require('./routes/index');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

app.use(passport.initialize());

require('./config/passport')(passport);

app.use('/camps', campRoutes);
app.use('/', indexRoutes);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));