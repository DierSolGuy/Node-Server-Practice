const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone_no: {
        type: Number,
        required: true        
    },
    address: {
        type: String,
        required: true
    },
    adhar_no: {
        type: Number,
        required: true
    },
    father_name: {
        type: String,
        required: true
    },
    mother_name: {
        type: String,
        required: true 
    }

}, { timestamps: true });


const Profile = mongoose.model('Profile', profileSchema);

// Exporting the model
module.exports = Profile;