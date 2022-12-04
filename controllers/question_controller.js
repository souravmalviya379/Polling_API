const Question = require('../models/question');
const Option = require('../models/option');

module.exports.fetchAllQuestions = async function(req, res){
    try{
        let questions = await Question.find({}).populate('options');

        return res.status(200).json({
            questions: questions
        })
    }catch(err){
        return res.status(400).json({
            message: `Unable to fetch questions : ${err}`
        })
    }
}

module.exports.fetchQuestion = async function(req, res){
    try{
        let question = await Question.findById(req.params.id).populate('options');

        return res.status(200).json({
            question: question
        })
    }catch(err){
        return res.status(400).json({
            message: `Error in fetching question: ${err}`
        })
    }
}

module.exports.create = async function(req, res){
    try{
        await Question.create({
            title: req.body.title
        });

        return res.status(200).json({
            message: 'Question created successfully !!'
        })
    }catch(err){
        return res.status(400).json({
            message: `Error in creating question : ${err}`
        })
    }
}

module.exports.addOption = async function(req, res){
    try{
        let queId = req.params.id;
        let question = await Question.findById(queId);
        
        let option = await Option.create({
            question: queId,
            option: req.body.option,
            votes: 0,
            link_to_vote: "#"
        })
        let link_to_vote =  `http://localhost:8000/options/${option.id}/add_vote`;

        //updating link_to_vote
        await Option.findByIdAndUpdate(option.id, {link_to_vote: link_to_vote})

        question.options.push(option);
        question.save();

        return res.status(200).json({
            message: "Option added successfully !!!"
        })
    }catch(err){
        return res.status(400).json({
            message: `Error in adding option : ${err}`
        })
    }
}

module.exports.destroy = async function(req, res){
    try {
        let queId = req.params.id;
        let question = await Question.findById(queId);
        question.remove();

        await Option.deleteMany({question: queId});

        return res.status(200).json({
            message: 'Question and associated options deleted successfully !!!'
        })
    } catch (error) {
        return res.status(400).json({
            message: `Error in deleting question : ${error}`
        })
    }
}