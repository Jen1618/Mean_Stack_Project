const express = require('express');
const app = express();

const mongoose = require('./database/mongoose');

const PORT = 3000;
const Content = require('./database/models/content');
const Blog = require('./database/models/blog');
app.use(express.json());

/*
CORS - Cross Origin Request Security 
localhost:3000 - backend api
localhost:4200 - front-end
*/

app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/*
   Blog: Create, Update, ReadAll, Delete
   Content: Create, Update, ReadAll
*/

app.get('/blogs', (req, res)=>{
    Blog.find({})
    .then(blogs => res.send(blogs))
    .catch((error)=> console.log(error));
});

app.post('/blogs', (req, res)=>{
    (new Blog({'title' : req.body.title, 'author': req.body.author}))
        .save()
        .then((blog) => res.send(blog))
        .catch((error)=> console.log(error));
});

app.get('/blogs/:blogId', (req, res)=>{
    Blog.find({_id: req.params.blogId})
        .then((blog) => res.send(blog))
        .catch((error)=> console.log(error));
});

app.patch('/blogs/:blogsId', (req, res) => {
    Blog.findOneAndUpdate({ '_id': req.params.blogId}, { $set: req.body })
        .then((blog) => res.send(blog))
        .catch((error)=> console.log(error));
});

app.delete('/blogs/:blogId', (req, res)=>{
    const deleteContent = (content) => {
        Content.deleteMany({_blogId: blog._id})
            .then(()=> blog)
    };
    const blog = Blog.findByIdAndDelete(req.params.blogId)
        .then((blog) => res.send(deleteContent(blog)))
        .catch((error)=> console.log(error));
});

app.get('/blogs/:blogId/contents', (req, res) =>{
   Content.find({_blogId: req.params.blogId})
    .then((contents) => res.send(contents))
    .catch((error)=> console.log(error));
});

app.post('/blogs/:blogId/contents', (req, res) =>{
    (new Content({'info': req.body.info, '_blogId':req.params.blogId}))
        .save()
        .then((content) => res.send(content))
        .catch((error)=> console.log(error));
});

app.patch('/blogs/:blogsId/contents', (req, res) => {
    Content.findOneAndUpdate({ _blogId : req.params.blogId}, { $set: req.body })
        .then((content) => res.send(content))
        .catch((error)=> console.log(error));
});

app.listen(3000, () => console.log("Server is Connected on port 3000"));
