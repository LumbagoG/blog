// Imports modules
import express = require("express");

const router = express.Router();

/* GET home page. */
router.get(
  "/",
  function (req: any, res: { send: (arg0: string) => void }, next: any) {
    res.send("Index");
  }
);

// Export
export default router;
