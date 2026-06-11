const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    title: String, 
    desc: String, 
    link: String
}, { timestamps: true });
module.exports = mongoose.model('Post',PostSchema,'Posts');
