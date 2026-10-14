
import express, { Request, Response } from "express";
import { createServer } from "node:http";
import path from "node:path";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);

const port = Number(process.env.PORT) || 3000;
const indexPath = path.join(process.cwd(), "index.html");


app.get("/", (_req: Request, res: Response) => {
  res.sendFile(indexPath);
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg: string) => {
    io.emit("chat message", msg);
  });
});

server.listen(port, "0.0.0.0", () => {
  console.log(`ChatterBox running on port ${port}`);
});
