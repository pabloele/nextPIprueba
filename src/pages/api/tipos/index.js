const axios = require("axios");
const {
  getAllTypes,
  typesToDb,
} = require("../../../components/api/controllers/typesControllers");
// const {
//   getAllTypes,
// } = require("../../../components/api/controllers/typesControllers");

export default async function handler(req, res) {
  let typesNames;

  try {
    typesNames = await getAllTypes();
    await typesToDb(typesNames);
    res.status(201).json({ tipos_importados: typesNames });
  } catch (error) {
    res.status(400).json({ error: error });
  }

  //console.log(typesNames)
  //const typesNames = getAllTypes()
  //typesToDb()

  res.status(200).json(typesNames);

  //console.log(typesArray);
}

// module.exports = {
//   getTypesHandler,
// };

// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: "tipos" });
// }
