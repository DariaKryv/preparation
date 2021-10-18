const { Router } = require("express");
const router = new Router();
//const Auth = require("../models").auth;
const Space = require("../models").space;

router.get("/", async (request, response, next) => {
  try {
    const allSpaces = await Space.findAll();
    response.status(200).send(allSpaces);
    console.log("Hello, there are ", allSpaces);
  } catch (e) {
    next(e);
    //console.log(e);
    // console.log("there are ", allSpace);
  }
});

module.exports = router;
