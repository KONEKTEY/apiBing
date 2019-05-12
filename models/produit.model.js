const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProduitSchema = new Schema({
    client: String,
	commande: String,
	produit: String,
	refproduit: String,
	poste: Number,
	nombrepiece: Number,
	nombrevisuels: Number,
	state : {
		type : String,
		default: 'waiting',
	}
});


// Export the model
module.exports = mongoose.model('Produit', ProduitSchema);