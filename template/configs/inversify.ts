import { Container } from "inversify";

import "reflect-metadata";

const container = new Container();
container.load();
export default container;