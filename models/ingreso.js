var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IngresoSchema = Schema({
    proveedor : {type: String, required: true},//F
    ncomprobante : {type: String, required: true},//
    documento : {type: String, required: true},
    monto_total : {type: String, required: true},
    serie : {type: Number, required: true},
    monto_resultante : {type: String, required: true},
    usuario: {type: Schema.ObjectId, ref: 'usuario', required: true},

    createdAt: {type: Date, default: Date.now}
});
module.exports = mongoose.model('ingreso',IngresoSchema);