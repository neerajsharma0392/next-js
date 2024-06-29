import { data } from "@/data";
import { withSession } from "@/session";

async function handler(req, res) {
  const { username, password } = req.body;

  const user = data.find((item) => item.username == username);

  if (user && user.password == password) {
    // create session
    req.session.set("user", user);
    await req.session.save();
    res.status(200).json({ message: "user authenticated" });
  } else {
    res.status(401).json({ message: "username or password is wrong" });
  }
}

export default withSession(handler);
