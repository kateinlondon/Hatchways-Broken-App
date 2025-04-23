async function getData(req, res, next) {
  try {
    const data = await Promise.resolve([1, 2, 3, 4, 5]);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
}

module.exports = { getData };
