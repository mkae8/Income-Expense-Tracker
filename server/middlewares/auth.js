import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ msg: "Token is required" });
  }

  const jwtToken = token.split(" ")[1];

  jwt.verify(jwtToken, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ msg: "Invalid token provided" });
    }
    // console.log(decoded.userid);
    // Токен амжилттай баталгаажсан
    res.locals.userid = decoded.userid;
    next();
  });
};
