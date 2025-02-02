import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "messages.json");

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Message reçu :", data);

    // Vérifier si le fichier existe, sinon le créer
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([], null, 2), "utf8");
    }

    // Lire les données existantes
    const existingMessages = JSON.parse(fs.readFileSync(filePath, "utf8"));

    // Ajouter le nouveau message
    existingMessages.push({
      name: data.name,
      email: data.email,
      message: data.message,
      date: new Date().toISOString(),
    });

    // Écrire les données mises à jour dans le fichier
    fs.writeFileSync(filePath, JSON.stringify(existingMessages, null, 2), "utf8");

    return NextResponse.json({ message: "Message enregistré avec succès !" });
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du message :", error);
    return NextResponse.json(
      { message: "Erreur lors de l'enregistrement du message." },
      { status: 500 }
    );
  }
}
