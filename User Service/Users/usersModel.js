
require('dotenv/config');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const { SALT_ROUNDS, SECRET_JWT_KEY } = require("../config");
const createConnection = require('../connection');

class UsersModel{ 
    static async register({ usuario }) {
        const {
            username,
            password,
            email
        } = usuario;
        const hashedPassword = bcrypt.hashSync(password, SALT_ROUNDS);

        let connection;
        try {
            connection = await createConnection();
            const [result] = await connection.execute(
                "INSERT INTO user (username, password, email) VALUES (?, ?, ?)",
                [username, hashedPassword, email]
            );
            // No se retorna la contraseña
            return {
                username: username,
                email: email
            };
        } catch (error) {
            throw new Error(`Error al crear el usuario ${username}: ${error.message}`);
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    static async login ({ usuario }) {
        const {
            username,
            password
        } = usuario
        let connection;
        try {
            connection = await createConnection();
            const [rows] = await connection.execute('SELECT * FROM user WHERE username = ?', [username])
            if (rows.length === 0) {
                throw new Error(`El usuario ${username} no existe.`)
            }
            const user = rows[0];
            const isValid = await bcrypt.compare(password, user.password)
            if (!isValid) {
                throw new Error("Contraseña inválida.");
            }
            
            const token = jwt.sign(
                { username: user.username, email: user.email },
                SECRET_JWT_KEY, 
                {
                    expiresIn: "1h"
                }
            )
            return {
                username: user.username,
                email: user.email,
                token: token
            }
        } catch (error) {
            console.log(error);
            throw new Error(`Error al buscar el usuario ${username}: ${error.message}`);
        } finally {
            if (connection) {
                await connection.end();
            }
        }
        
    }

    static async verifyToken ({ token }) {
        const verifiedToken = jwt.verify(token, SECRET_JWT_KEY, (err) => {
            if (err) {
                return { valid: false };
            }
            return { valid: true };
        });
    }
}

module.exports = {UsersModel};