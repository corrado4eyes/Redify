import { Container } from "inversify";
import postModule from "../modules/postModule"
import "reflect-metadata";

const container = new Container();
container.load(postModule);
export default container;