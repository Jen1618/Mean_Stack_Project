const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        minlength: 3
    },
    author:{
        type: String,
        trim: true,
        minlength: 3
    }
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;