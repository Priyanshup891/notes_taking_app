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