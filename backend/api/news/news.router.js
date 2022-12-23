const {
  createNews,
  getNews,
  updateNews,
  deleteNews,
} = require("./news.controller");

const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createNews);
router.get("/", getNews);
router.patch("/", checkToken, updateNews);
router.delete("/", checkToken, deleteNews);

module.exports = router;
