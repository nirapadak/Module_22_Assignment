
exports.create = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "payment created successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error payment not create"
    });
  }
}


exports.read = async (req, res) => { 
  try {
    return res.status(200).json({
      success: true,
      massage: "payment read successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error payment not read"
    });
  }
};


exports.delete = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "payment deleted successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error payment not deleted"
    });
  }
};


exports.update = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "payment update successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error payment not updated"
    });
  }
};