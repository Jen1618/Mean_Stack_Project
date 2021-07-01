const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    info: String,
    _blogId:{
        type: mongoose.Types.ObjectId,
        required: true
    }
});

const Content = mongoose.model('Content', ContentSchema);

module.exports = Content;