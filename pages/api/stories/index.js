import nc from "next-connect";
import db from "./../../../utility/DB";
import story from "../../../Model/story";

const handler = nc();

handler.get(async (req, res) => {
  await db();

  return res.json({ path: "api/stories", method: "get" });
});

handler.post(async (req, res) => {
  return res
    .status(200)
    .json({ path: "api/stories", method: "post", body: req.body });
});

export default handler;
