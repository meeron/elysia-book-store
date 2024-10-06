import { Server } from "./sever";
import homeFeature from "./features/home";

const server = new Server();
server.configure([homeFeature]);

server.run();
