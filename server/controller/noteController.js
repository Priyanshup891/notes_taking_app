const Notes = require("../model/noteModel");

module.exports.addingNote = async (req, res, next) => {
  try{
    const { title, description } = req.body;
    const notes = await Notes.create({
        title,
        description
    })
    return res.json({status:201, notes})
  } catch(error){
      next(err.message)
  }
};


module.exports.gettingNote = async (req, res, next) => {
    try{
        const getNote = await Notes.find({});
        return res.json({status:201, getNote});
    } catch(err){
        next(err.message)
    }
}

module.exports.gettingIdNote = async(req,res,next) => {
    try{
       const getIdNote = await Notes.find({_id: req.params.id})
        return res.json({status:201,getIdNote})
    } catch(err){
        next(err.message)
    }
}

module.exports.edittingNote = async (req,res,next) => {
    try{
        let note = req.body;
        const editNote = new Notes(note);
        await Notes.updateOne({_id: req.params.id}, editNote);
        return res.json({status:201, editNote})
    } catch(err){
        next(err.message);
    }
}