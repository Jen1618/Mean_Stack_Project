const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    info:{
        type: String,
        trim: true,
        minlength: 3
    },
    _blogId:{
        type: mongoose.Types.ObjectId,
        required: true
    }
});

const Content = mongoose.model('Content', ContentSchema);

mongoose.model.exports = Content;