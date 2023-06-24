export const checkForm = (name, value) => {
    switch (name) {
        case "email":
        case "mail":
        case "e-mail":
        case "correo":
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
                return "Formato de email incorrecto";
            }
            return "";
        case "pass":
        case "password":
        case "contraseña":
        case "contrasenna":
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(value)) {
                return "Formato de contraseña incorrecto";
            }
            return "";

        default:
            console.log("No se reconoce el formato");
            break;
    }
}