
exports.create = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Product created successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Product not create"
    });
  }
}


exports.read = async (req, res) => { 
  try {
    return res.status(200).json({
      success: true,
      massage: "Product read successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Product not read"
    });
  }
};


exports.delete = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Product deleted successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Product not deleted"
    });
  }
};


exports.update = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Product update successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Product not updated"
    });
  }
};