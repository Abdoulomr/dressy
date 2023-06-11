async function registerHandler(req, res, caches) {
  if (req.method === "POST") {
    dbConnect();
    const {
      newAdminFirstName,
      newAdminLastName,
      newAdminPhoneNumber,
      newAdminEmail,
      newAdminPassword,
    } = req.body;

    // Vérification de l'existence de l'admin
    const existingAdmin = await Admin.findOne({ adminEmail: newAdminEmail });

    if (existingAdmin) {
      // L'admin existe déjà, retourne une erreur ou effectue une action appropriée
      return res.status(400).json({ error: "Cet admin existe déjà." });
    }

    // L'admin n'existe pas, on peut le créer
    const newAdmin = await Admin.create({
      adminFirstName: newAdminFirstName,
      adminLastName: newAdminLastName,
      adminPhoneNumber: newAdminPhoneNumber,
      adminEmail: newAdminEmail,
      adminPassword: newAdminPassword,
    });

    console.log(newAdmin);

    res.status(201).json({ newAdmin });
  }
}
