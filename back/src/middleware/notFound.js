module.exports = (req, res) => {
  res.status(404).json({ err: "Not Found" });
}