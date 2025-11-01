export class ServerError extends Error {
    constructor() {
        super("Ha ocurrido un error por parte del servidor")
    }
}

export class IncorrectCredentials extends Error {
    constructor() {
        super("Las credenciales no son correctas")
    }
}