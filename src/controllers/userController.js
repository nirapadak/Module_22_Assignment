
exports.create = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "user created successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error user not create"
    });
  }
}


exports.read = async (req, res) => { 
  try {
    return res.status(200).json({
      success: true,
      massage: "user read successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error user not read"
    });
  }
};


exports.delete = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "user deleted successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error user not deleted"
    });
  }
};


exports.update = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "user update successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error user not updated"
    });
  }
};