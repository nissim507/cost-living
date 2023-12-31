/* Omer Norman 206729873
 Nissim Cohen 308152537*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
	name: {
		type: String,
		required: true,
		enum: [
			'food', 'health', 'housing', 'sport', 'education', 'transportation', 'other'
		],
	},
});

// Create and export a model
module.exports = mongoose.model('Category', categorySchema);
