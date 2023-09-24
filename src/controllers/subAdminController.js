
exports.create = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Sub Admin created successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Sub Admin not create"
    });
  }
}


exports.read = async (req, res) => { 
  try {
    return res.status(200).json({
      success: true,
      massage: "Sub Admin read successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Sub Admin not read"
    });
  }
};


exports.delete = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Sub Admin deleted successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Sub Admin not deleted"
    });
  }
};


exports.update = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Sub Admin update successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Sub Admin not updated"
    });
  }
};