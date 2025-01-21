const dressModel = require("../model/index");

const getAllData = async (req,res) => {
  try {
    const getData=await dressModel.find();
    if (!getData) {
      res.status(404).json({message:"not found!"})
    }
    res.status(200).json(getData)
  } catch (error) {
    res.status(500).send({message:error.message})
  }
}
const getAllDataById = async (req,res) => {
  const id = req.params.id
  try {
    const getDataId=await dressModel.find(id);
    if (!getDataId) {
      res.status(404).json({message:"not found!"})
    }
    res.status(200).json(getDataId)
  } catch (error) {
    res.status(500).send({message:error.message})
  }
}
const deleteData = async (req,res) => {
  const id = req.params.id
  try {
    const deleted=await dressModel.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({message:"not found!"})
    }
    res.status(200).json(deleted)
  } catch (error) {
    res.status(500).send({message:error.message})
  }
}
const postData = async (req,res) => {

  try {
    const createData= dressModel({...req.body});
    await createData.save();
    if (!createData) {
      res.status(404).json({message:"not found!"})
    }
    res.status(200).json({message:"created!",createData:createData})
  } catch (error) {
    res.status(500).send({message:error.message})
  }
}

module.exports={
  getAllData,
  getAllDataById,
  deleteData,
  postData
}


