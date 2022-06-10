const{ createNews, getNews, updateNews, deleteNews } = require("./news.controller");

const router = require("express").Router();
const{checkToken} = require("../../auth/token_validation");

router.post("/", checkToken, createNews);
router.get("/", getNews);
router.patch("/", updateNews);
router.delete("/", deleteNews);

module.exports = router;