import React, { useEffect, useState } from "react";
import "./UserProfile.css"
import { bringProfile } from "../../../utils/apiCalls/usersCalls/userGetOne";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { Card } from "../../../common/Card/Card";
import { FormBtn } from "../../../common/FormBtn/FormBtn";
import { InputField } from "../../../common/InputField/InputField";
import { checkForm } from "../../../utils/validateForm";
import { updateProfile } from "../../../utils/apiCalls/usersCalls/profileUpdate";
import { useNavigate } from "react-router-dom";
import { inputHandler } from "../../../utils/useful";
export const UserProfile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    const dataRedux = useSelector(userData);
    // const role = dataRedux.data.role;
    const token = dataRedux?.credentials?.token;
    const [editing, setEditing] = useState(false);
    const [data, setData] = useState({});

    const handlerSubmit = (data,token) => {
        // const data = { name: credentials.name, surname: credentials.surname, age: credentials.age, mobile: credentials.mobile, location: credentials.location };
        updateProfile(data,token)
            .then(
                setTimeout(() => {
                    setEditing(false)
                }, 500)

            );
        // console.log(`Nombre: ${credentials.name}`)
        // console.log(`Apellidos: ${credentials.surname}`)
        // console.log(`Edad: ${credentials.age}`)
        // console.log(`Móvil: ${credentials.mobile}`)
        // console.log(`Localización: ${credentials.location}`)
    };

    useEffect(() => {
        if (!editing) {
            bringProfile(token)
                .then(user => setUser(user))
                .catch(error => console.log(error))
        }
    }, [editing]);

    const [credentials, setCredentials] = useState({
        name: "",
        surname: "",
        age: "",
        mobile: "",
        location: ""
    });

    const [credentialsError, setCredentialsError] = useState({
        nameError: "",
        surnameError: "",
        ageError: "",
        mobileError: "",
        locationError: ""
    });

    const inputCheck = (e) => {
        let errorMessage = checkForm(e.target.name, e.target.value);
        setCredentialsError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: errorMessage
        }));
    }

    return (
        <div className="userProfileStyle">
            < div className="viewTitle" >
                MI PERFIL
            </div >

            {user
                ? (
                    <div className="allUsers">
                        {
                            editing
                                ? (
                                    <FormBtn
                                        pathClick={()=>{handlerSubmit(data,token)}}
                                        name={"Confirmar"}
                                    />
                                )
                                : (
                                    <FormBtn
                                        pathClick={() => { setEditing(true) }}
                                        name={"Editar"}
                                    />
                                )
                        }
                        {
                            <div key={user.id} className="userCard">
                                {
                                    editing
                                        ? (
                                            <div className="formStyleEditing">
                                                <div className="dataForm">
                                                    <div className="textForm">
                                                        Nombre:
                                                    </div>
                                                    <InputField
                                                        type={"text"}
                                                        name={"name"}
                                                        classDesign={
                                                            credentialsError.nameError === ""
                                                                ? "inputFieldStyle"
                                                                : "inputFieldStyle errorInputFieldStyle"
                                                        }
                                                        placeholder={user.name ? user.name : "Introduce tu nombre ..."}
                                                        handlerFunction={(e)=>inputHandler(e, setData)}
                                                        onBlurFunction={inputCheck}
                                                    />
                                                </div>
                                                <div className="errorText">{credentialsError.nameError}</div>
                                                <div className="dataForm">
                                                    <div className="textForm">
                                                        Apellidos:
                                                    </div>
                                                    <InputField
                                                        type={"text"}
                                                        name={"surname"}
                                                        classDesign={
                                                            credentialsError.surnameError === ""
                                                                ? "inputFieldStyle"
                                                                : "inputFieldStyle errorInputFieldStyle"
                                                        }
                                                        placeholder={user.surname ? user.surname : "Introduce tu nombre ..."}
                                                        handlerFunction={(e)=>inputHandler(e, setData)}
                                                        onBlurFunction={inputCheck}
                                                    />
                                                </div>
                                                <div className="errorText">{credentialsError.surnameError}</div>
                                                <div className="dataForm">
                                                    <div className="textForm">
                                                        Edad:
                                                    </div>
                                                    <InputField
                                                        type={"text"}
                                                        name={"age"}
                                                        classDesign={
                                                            credentialsError.ageError === ""
                                                                ? "inputFieldStyle"
                                                                : "inputFieldStyle errorInputFieldStyle"
                                                        }
                                                        placeholder={user.age ? user.age : "Introduce tu edad ..."}
                                                        handlerFunction={(e)=>inputHandler(e, setData)}
                                                        onBlurFunction={inputCheck}
                                                    />
                                                </div>
                                                <div className="errorText">{credentialsError.ageError}</div>
                                                <div className="dataForm">
                                                    <div className="textForm">
                                                        Móvil:
                                                    </div>
                                                    <InputField
                                                        type={"text"}
                                                        name={"mobile"}
                                                        classDesign={
                                                            credentialsError.mobileError === ""
                                                                ? "inputFieldStyle"
                                                                : "inputFieldStyle errorInputFieldStyle"
                                                        }
                                                        placeholder={user.mobile ? user.mobile : "Introduce tu móvl ..."}
                                                        handlerFunction={(e)=>inputHandler(e, setData)}
                                                        onBlurFunction={inputCheck}
                                                    />
                                                </div>
                                                <div className="errorText">{credentialsError.mobileError}</div>
                                                <div className="dataForm">
                                                    <div className="textForm">
                                                        Correo:
                                                    </div>
                                                    <div>
                                                        {user.email}
                                                    </div>
                                                </div>
                                                <div className="dataForm">
                                                    <div className="textForm">
                                                        Localización:
                                                    </div>
                                                    <InputField
                                                        type={"text"}
                                                        name={"location"}
                                                        classDesign={
                                                            credentialsError.locationError === ""
                                                                ? "inputFieldStyle"
                                                                : "inputFieldStyle errorInputFieldStyle"
                                                        }
                                                        placeholder={user.location ? user.location : "Introduce tu dirección ..."}
                                                        handlerFunction={(e)=>inputHandler(e, setData)}
                                                        onBlurFunction={inputCheck}
                                                    />
                                                </div>
                                                <div className="errorText">{credentialsError.locationError}</div>
                                            </div>
                                        )
                                        : (
                                            <Card
                                                name={user.name}
                                                surname={`Apellidos: ${user.surname}`}
                                                age={`Edad: ${user.age}`}
                                                mobile={`Móvil: ${user.mobile}`}
                                                email={`Correo: ${user.email}`}
                                                location={`Localización: ${user.location}`}
                                            />
                                        )
                                }
                            </div>
                        }
                    </div>

                ) : (
                    <div>CARGANDO ...</div>
                )
            }
        </div>
    )
}