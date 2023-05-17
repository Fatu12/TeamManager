const BeltExamController = require("../controller/beltExam.controller")
module.exports = app =>{
    app.get('/players/list', BeltExamController.getAllBeltExams)
    app.post('/player/addplayer', BeltExamController.createBeltExams)
    app.get('/status/:id', BeltExamController.getOneBeltExam)
    app.patch('/player/update/:id', BeltExamController.updateBeltExams)
    app.delete('/delete/player/:id',BeltExamController.deleteBeltExams)
}