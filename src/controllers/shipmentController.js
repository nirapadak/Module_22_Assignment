
exports.create = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "Shipment created successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Shipment not create"
    });
  }
}


exports.read = async (req, res) => { 
  try {
    return res.status(200).json({
      success: true,
      massage: "Shipment read successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error Shipment not read"
    });
  }
};


exports.delete = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "shipment deleted successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error shipment not deleted"
    });
  }
};


exports.update = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      massage: "shipment update successfully",
    })
  } catch {
    return res.status(500).json({
      success: false,
      massage: "error shipment not updated"
    });
  }
};