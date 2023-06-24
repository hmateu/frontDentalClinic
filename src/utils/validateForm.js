export const checkForm = (name, value) => {
    switch (name) {
        case "name":
        case "nombre":
            if (!/^(?=(?:\S*\s?\S*){0,1}$)[A-Za-z\s]{2,}$$/.test(value)) {
                return "Formato de nombre no válido"
            }
            return ""

        case "surname":
        case "apellido":
        case "apellidos":
            if (!/^(?=(?:\S*\s){0,4}\S*$)[A-Za-z\s]{2,}$/.test(value)) {
                return "Formato de apellidos no válido"
            }
            return ""

        case "dni":
        case "nif":
            if (!/^(?:[0-9]{8}[A-Za-z])$/.test(value)) {
                return "DNI no válido"
            }
            return ""

        case "age":
        case "edad":
            if (!/^(?:[1-9][0-9]?|1[0-0][0-5])$/.test(value)) {
                return "Edad incorrecta"
            }
            return ""

        case "phone":
        case "teléfono":
            if (!/^\d{9}$/.test(value)) {
                return "Teléfono no válido"
            }
            return ""

        case "location":
        case "dirección":
            if (!/^[A-Za-z\s]{2,}$/.test(value)) {
                return "Dirección no válida"
            }
            return ""

        case "email":
        case "mail":
        case "e-mail":
        case "correo":
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
                return "Formato de email no válido";
            }
            return "";
        case "pass":
        case "password":
        case "contraseña":
        case "contrasenna":
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(value)) {
                return "Formato de contraseña no válido";
            }
            return "";

        default:
            console.log("No se reconoce el formato");
            break;
    }
}