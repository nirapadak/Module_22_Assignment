
exports.create = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "customer created successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error customer not create"
    });
  }
}


exports.read = async (req, res) => { 
  try {
    return res.status(200).json({
      success: true,
      massage: "customer read successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error customer not read"
    });
  }
};


exports.delete = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "customer deleted successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error customer not deleted"
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