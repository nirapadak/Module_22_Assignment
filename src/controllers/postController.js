
exports.create = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Post Controller created successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Post Controller not create"
    });
  }
}


exports.read = async (req, res) => { 
  try {
    return res.status(200).json({
      success: true,
      massage: "Post Controller read successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Post Controller not read"
    });
  }
};


exports.delete = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Post Controller deleted successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Post Controller not deleted"
    });
  }
};


exports.update = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Post Controller update successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Post Controller not updated"
    });
  }
};