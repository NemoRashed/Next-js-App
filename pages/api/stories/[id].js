import nc from "next-connect";

const handler = nc();

handler.put(async (req, res) => {
  return res.json({
    path: "api/stories",
    method: "put",
    body: req.body,
    param: body.query.id,
  });
});

handler.delete(async (req, res) => {
  return res.json({
    path: "api/stories",
    method: "delete",
    body: req.body,
    param: body.query.id,
  });
});

export default handler;
