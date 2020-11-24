const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true, //no two bootcamps cann have the same name
        trim: true,
        maxLength: [50, 'Name cannot be longer than 500 characters'],
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add a name'],
        maxLength: [500, 'Description cannot be longer than 500 characters'],
    },
    website: {
        type: String,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            'Please use a valid URL with HTTP or HTTPS'
        ]
    },
    phone: {
        type: String,
        maxLength: [20, 'Phone number cannot be more than 20 characters'],
    },
    email: {
        type: String,
        match: [
            ///^\w+([\.-]?\w+)*@w+([\.-]?\w+)*(\.\w{2,3})+$/, - tried this first but got error (may have typed it up wrong)
            /\S+@\S+\.\S+/,
            'Please add a valid email address'
        ]
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    location: {
        //GeoJSON Point
        type: {
            type: String,
            enum: ['Point'],
            required: false 
        },
          coordinates: {
            type: [Number],
            required: false, //these may need to be flipped to true, I turned to false because I was getting errors in Postman
            index: '2dsphere'
        },
          formattedAddress: String,
          street: String,
          city: String,
          state: String,
          zipcode: String,
          country: String,
    },
    careers: {
        //Array of strings which is why we have [] in Strings
        type: [String],
        required: true,
        enum: [
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
    },
    averageRating: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [5, 'Rating cannot be more than 5']
    },
    averageCost: Number,
    photo: {
        type: String, //this is just the file name inn the database
        default: 'no-photo.jpg'
    },
    housing: {
        type: Boolean,
        default: false
    },
    jobAssistance: {
        type: Boolean,
        default: false
    },
    jobGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);