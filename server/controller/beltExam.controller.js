
const BeltExam = require('../models/beltExam.model')
module.exports = {
  
    createBeltExams : (req,res)=>{
        console.log("BACK END CREATE", req)
        BeltExam.create(req.body)
        .then(newBeltExam =>{console.log(req.body); res.status(200).json(newBeltExam)})
        // .catch(err => res.status(400).json({errorTest: err} ))
        // if we don't have status(400) when the client req it assume that everything is ok
        .catch(err => { console.log("Something went wrong CREATE BACK END ",err); res.status(400).json( err )})

    },
    getAllBeltExams:(req,res)=>{
        console.log("BACK END GET ALL res",res)
        BeltExam.find()
        .then(allBeltExams =>{console.log( 'BACK END all belts ', allBeltExams); res.status(200).json(allBeltExams)})
        .catch(err=> res.status(400).json(`Something went wrong  BACK END  GET ALL ${err}`))
    },

    getOneBeltExam:(req,res)=>{
       BeltExam.findById({_id:req.params.id})
        .then(oneBeltExam => {console.log( 'BACK END ONE BELT EXAM ',oneBeltExam);
            res.status(200).json(oneBeltExam)})
        .catch(err => res.status(400).json(`Something went wrong BACK END  GET ONE ${err}`))
    },
    
    updateBeltExams :(req,res)=>{
        BeltExam.findByIdAndUpdate({_id: req.params.id}, req.body, ({new: true,runValidators: true}))
        .then(updatedBeltExams =>res.status(200).json(updatedBeltExams))
        .catch(err => res.json(`Something went wrong BACK END UPDATE  ${err}}`))
    },
    deleteBeltExams : (req,res)=>{
       BeltExam.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.status(200).json(deleteConfirmation))
        .catch(err =>res.json(`Something went wrong BACK END DELETE ${err}`))
    }
    
}