const Produit = require('../models/produit.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('TEST OK !');
};

exports.produit_read = function (req, res, next) {
    Produit.findById(req.params.id, function (err, produit) {
        if (err) return next(err);
        res.send(produit);
    })
};

/*exports.get_the_pizzas = function (req, res) {
    Produit.find({}, function(err, produit){
        if (err) return next(err);
        res.send(produit);
    })

};*/
exports.get_the_missions = function(req, res) {

    Produit.find ({},(err, produits)=>{
        if (err) {
            res.send(err);
        }
        res.json(produits);
    })
};

exports.produit_create = function (req, res) {
    let produit = new Produit(
        {
            client: req.body.client,
            commande: req.body.commande,
            produit: req.body.produit,
            refproduit: req.body.refproduit,
            poste: req.body.poste,
            nombrepiece: req.body.nombrepiece,
            nombrevisuels: req.body.nombrevisuels,
        }
    );
    console.log(req);
    produit.save(function (err) {
        if (err) {
            return err;
            /*throw err;*/
        }
        console.log(res)
        res.send("mission added")
    })
};

exports.produit_update = function (req, res, next) {
    Produit.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, Produit) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.produit_delete = function (req, res, next) {
    Produit.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};