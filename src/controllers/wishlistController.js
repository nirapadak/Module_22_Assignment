
exports.create = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "wish List created successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error wish List not create"
    });
  }
}


exports.read = async (req, res) => { 
  try {
    return res.status(200).json({
      success: true,
      massage: "wish List read successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error wish List not read"
    });
  }
};


exports.delete = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "wish List deleted successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error wish List not deleted"
    });
  }
};


exports.update = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "wish List update successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error wish List not updated"
    });
  }
};