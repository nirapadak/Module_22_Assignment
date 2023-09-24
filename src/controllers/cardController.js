
exports.create = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Card created successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Card not create"
    });
  }
}


exports.read = async (req, res) => { 
  try {
    return res.status(200).json({
      success: true,
      massage: "Card read successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Card not read"
    });
  }
};


exports.delete = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Card deleted successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Card not deleted"
    });
  }
};


exports.update = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Card update successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Card not updated"
    });
  }
};