const express = require("express");
const router = express.Router();

/**
 * @route         GET api/users/test
 * @description   Tests users route
 * @access        Public
 */
router.get("/test", (res, req) =>
  res.json({
    msg: "Posts Works"
  })
);

module.exports = router;
