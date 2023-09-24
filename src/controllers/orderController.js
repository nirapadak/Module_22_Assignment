
exports.create = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Order created successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Order not create"
    });
  }
}


exports.read = async (req, res) => { 
  try {
    return res.status(200).json({
      success: true,
      massage: "Order read successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Order not read"
    });
  }
};


exports.delete = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Order deleted successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Order not deleted"
    });
  }
};


exports.update = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Order update successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Order not updated"
    });
  }
};