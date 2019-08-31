const express = require('express');
const bodyParser = require('body-parser');
var createsend = require('createsend-node');
const hbs = require('hbs');
const app = express();

app.use(express.static(__dirname+'/views'));

app.set('view engine','hbs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;



var auth = { apiKey: 'Lum/xCtzlsE/TskMv12rBLRN78Lo998VUwEl0nZsKvUv+lF2deMMU7xKeur0XYlMiGElj4KGaw3z1/O8jndJ+Ol3mA9g9+//Adzc5zQJJAwzWSy4lGmqCpfF17zZ5dTKKYJo8C2OEyfqEbZG1Bfqeg==' };
var api = new createsend(auth);
var listId = 'd41bdfb6c09b28460bb3b2fd088cbe5e' // The ID of the list
let a;

app.post("/send-user", (req, res) => {
    var user = {
        EmailAddress: req.body.email,
        Name: req.body.name,
        CustomFields: [
            { Key: 'LaTranquilidadDeLaNaturaleza', Value: req.body.LaTranquilidadDeLaNaturaleza },
            { Key: 'IraCineaVerUnaBuenaPelicula', Value: req.body.IraCineaVerUnaBuenaPelicula },
            { Key: 'LaMusicaMeEncantaEnTodasSusFormas', Value: req.body.LaMusicaMeEncantaEnTodasSusFormas },
            { Key: 'AprenderDeTodoLoQuePueda', Value: req.body.AprenderDeTodoLoQuePueda },
            { Key: 'EstarActivoElDeporteMeSubeElAnimo', Value: req.body.EstarActivoElDeporteMeSubeElAnimo },
            { Key: 'UnaBuenaLectura', Value: req.body.UnaBuenaLectura },
            { Key: 'ConMisAmigos', Value: req.body.ConMisAmigos },
            { Key: 'ConMiFamilia', Value: req.body.ConMiFamilia },
            { Key: 'ConMisMascotas', Value: req.body.ConMisMascotas },
            { Key: 'ConPersonasQueVoyConociendoEnMiDiaDia', Value: req.body.ConPersonasQueVoyConociendoEnMiDiaDia },
            { Key: 'RealmenteNoDependoDeNadie', Value: req.body.RealmenteNoDependoDeNadie },
            { Key: 'Meditacion', Value: req.body.Meditacion },
            { Key: 'UnaNuevaTecnicaDeBaile', Value: req.body.UnaNuevaTecnicaDeBaile },
            { Key: 'Cocinar', Value: req.body.Cocinar },
            { Key: 'Ingles', Value: req.body.Ingles },
            { Key: 'Computacion', Value: req.body.Computacion },
            { Key: 'Artes', Value: req.body.Artes },
            { Key: 'CuidarDeMiSalud', Value: req.body.CuidarDeMiSalud },
            { Key: 'TenerUnHogarParMiyMiFamilia', Value: req.body.TenerUnHogarParMiyMiFamilia },
            { Key: 'UtilizarMiTiempoEnActividadesQueMeGustan', Value: req.body.UtilizarMiTiempoEnActividadesQueMeGustan },
            { Key: 'QueTeGustariaEncontrarEnComfama', Value: req.body.QueTeGustariaEncontrarEnComfama }
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