import Tipo from "@/model/Tipo";
//db.sync();
//console.log("DB> > > > >  > > > ", db);

//const Tipo = db.Tipo;

console.log("TIPOOOOOOOO", Tipo);
//const {Tipo} = require('../db')
const axios = require("axios");

//TRAE TODOS LOS TIPOS DE LA API --> DEVUELVE UN ARRAY

const getAllTypes = async () => {
  console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa");
  const typesArray = (await axios.get("https://pokeapi.co/api/v2/type")).data;
  const typesNames = typesArray.results.map((e) => e.name);
  // const typesNames = ["hola", "chau"];
  return typesNames;
};

//GUARDA LOS TIPOS EN LA TABLA 'Tipo' DE LA DB <-- RECIBE ARRAY DE TIPOS

const typesToDb = async (typesNames) => {
  console.log("tiposADb", typesNames);
  try {
    typesNames.forEach(async (element) => {
      await Tipo.create({ nombre: element });
    });
  } catch (error) {
    console.log(error.message);
  }
};

//OBTIENE EL ID DEL TIPO A PARTIR DEL NAME

// const idTypeByNombre = async (nombreTipo) => {
//       //console.log(nombreTipo)
//       const registro = await Tipo.findOne({
//         where: {
//           nombre: nombreTipo,
//         },
//       });

//       if (!registro) {
//         return null;
//       }

//       return registro.id;

// }

module.exports = {
  getAllTypes,
  typesToDb,
  // idTypeByNombre
};

/*


export default async (req, res) => {
  // console.log(req.body)
  // Recieved params from request
  let { name, email } = req.body;
  try {
    // check email, name, password format
    if (!isLength(name, { min: 3, max: 15 })) {
      return res.status(422).send("Name must be 3-10 characters long");
    } else if (!isEmail(email)) {
      return res.status(422).send("Email must be valid");
    }

    // Check if user with that email if already exists
    const user = await User.findOne({
      where: { email: email },
    });
    if (user) {
      return res.status(422).send(`User already exist with that ${email}`);
    }
    const newUser = await User.create({
      name,
      email,
    });
    res.status(201).send(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in signup. Please try again.");
  }
};
*/
