
exports.create = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Product item created successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Product item not create"
    });
  }
}


exports.read = async (req, res) => { 
  try {
    return res.status(200).json({
      success: true,
      massage: "Product item read successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Product item not read"
    });
  }
};


exports.delete = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Product item deleted successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Product item not deleted"
    });
  }
};


exports.update = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Product item update successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Product item not updated"
    });
  }
};