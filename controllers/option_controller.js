const Option = require('../models/option');
const Question = require('../models/question');

module.exports.destroy = async function(req, res){
    try{
        let optionId = req.params.id;
        let option = await Option.findById(optionId);

        let queId = option.question;
        option.remove();

        await Question.findByIdAndUpdate(queId, {$pull: {options: optionId}});

        return res.status(200).json({
            message: `Option deleted successfully !!!`
        });
    }catch(err){
        return res.status(400).json({
            message: `Error in deleting option : ${err}`
        })
    }
}

module.exports.incrementVote = async function(req, res){
    try{
        let optionId = req.params.id;
        //getting votes count
        let votes = (await Option.findById(optionId)).votes;
        votes ++;
        
        // updating votes to db
        await Option.findByIdAndUpdate(optionId, {votes: votes});

        return res.status(200).json({
            message: 'Votes incremented successfully !!!'
        })

    }catch(err){
        return res.status(400).json({
            message: `Error incrementing votes : ${err}`
        })
    }
}