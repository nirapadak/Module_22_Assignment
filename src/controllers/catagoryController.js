
exports.create = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "category created successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error category not create"
    });
  }
}


exports.read = async (req, res) => { 
  try {
    return res.status(200).json({
      success: true,
      massage: "category read successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error category not read"
    });
  }
};


exports.delete = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "category deleted successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error category not deleted"
    });
  }
};


exports.update = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "category update successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error category not updated"
    });
  }
};