import { Sequelize } from "sequelize";
import Tipo from "../model/Tipo";

const sequelize = new Sequelize("pokemon", "postgres", "1aq", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.sync().then();
export default sequelize;
