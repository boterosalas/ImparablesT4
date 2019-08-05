const express = require('express');
const bodyParser = require('body-parser');
var createsend = require('createsend-node');
const hbs = require('hbs');



const app = express();
app.set('view engine','hbs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;



var auth = { apiKey: 'Lum/xCtzlsE/TskMv12rBLRN78Lo998VUwEl0nZsKvUv+lF2deMMU7xKeur0XYlMiGElj4KGaw3z1/O8jndJ+Ol3mA9g9+//Adzc5zQJJAwzWSy4lGmqCpfF17zZ5dTKKYJo8C2OEyfqEbZG1Bfqeg==' };
var api = new createsend(auth);
var listId = '673859f847e17c44ee82782da616257e' // The ID of the list


app.post("/send-user", (req, res) => {
    var user = {
        EmailAddress: req.body.email,
        Name: req.body.name,
        CustomFields: [
            { Key: 'pleasures', Value: req.body.pleasures }
          ]
    };
    api.subscribers.addSubscriber(listId, user, (err, response) => {
        if (err) {
            console.log(err);
            res.send(err)
        }
        else {
            console.log(response)
            console.log(user);
            res.render('sendResponse',{name:user.Name});
        }
    });

})

app.listen(port, () => {
    console.log("Servidor inicilizado en ", port)
});