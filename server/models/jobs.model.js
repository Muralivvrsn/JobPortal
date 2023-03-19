const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Job = new Schema({
    company:{
        type:String
    },
    education:String,
    experience:String,
    industry:String,
    description:String,
    jobLocation:String,
    jobTitle:String,
    salary:String,
    skills:String,
    id:String,
});


const Jobs = mongoose.model("Jobs",Job);

module.exports = Jobs;