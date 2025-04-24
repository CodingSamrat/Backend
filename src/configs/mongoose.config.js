import { connect } from "mongoose";


export const DatabaseConfig = async () => {
    try {
        const MONGODB_URI = process.env.MONGODB_URI;
        const connection = connect(MONGODB_URI)

        const db = (await connection).connection;
        const { host, name, port } = db;

        console.log(`✓  MongoDB connected\n   ↳ Database: ${name}\n   ↳ Hostname: ${host}\n`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

