
exports.create = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Admin created successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Admin not create"
    });
  }
}


exports.read = async (req, res) => { 
  try {
    return res.status(200).json({
      success: true,
      massage: "Admin read successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Admin not read"
    });
  }
};


exports.delete = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Admin deleted successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Admin not deleted"
    });
  }
};


exports.update = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Admin update successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Admin not updated"
    });
  }
};