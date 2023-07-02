import React from "react";
import "./About.css"
import about from "../../img/about.jpg";

export const About = () => {
    return (
        <div className="aboutStyle">
            <div className="viewTitle">
                SOBRE NOSOTROS
            </div>
            <div className="aboutBody">
                <div className="aboutPicture">
                    <img src={about} alt="Sobre nosotros" className="pictureAboutUs"/>
                </div>
                <div className="aboutText">
                    <div>La Clínica Dental Héctor Mateu es un centro de excelencia en el cuidado dental, comprometido con la salud bucal y la satisfacción de nuestros pacientes. Nuestro enfoque se basa en buenas prácticas clínicas, tecnología de vanguardia y un equipo de profesionales altamente capacitados.</div>

                    <div>En nuestra clínica, entendemos que la salud bucal es esencial para el bienestar general de cada individuo. Nuestro equipo de dentistas, higienistas y especialistas trabaja de manera colaborativa para ofrecer un enfoque integral y personalizado a cada paciente. Nos esforzamos por establecer relaciones de confianza, brindando atención individualizada y asegurando un ambiente cómodo y relajante.</div>

                    <div>Contamos con servicios de calidad que incluyen ortodoncia, endodoncia, estética dental e implantes. Ya sea que necesite corregir la alineación de sus dientes, realizar un tratamiento de conducto, mejorar la apariencia de su sonrisa o reemplazar dientes perdidos, nuestros expertos están capacitados para ofrecer soluciones de vanguardia con resultados duraderos.</div>

                    <div>Nos mantenemos al día con los avances más recientes en odontología. Utilizamos tecnología de última generación, como radiografías digitales y escáneres intraorales, para brindar diagnósticos precisos y tratamientos efectivos. Además, seguimos estrictos protocolos de esterilización y control de infecciones para garantizar la seguridad de nuestros pacientes.</div>

                    <div>Nos enorgullece ser una clínica dental que se preocupa por la comodidad y la experiencia positiva de cada paciente. Nuestro personal amable y atento se esfuerza por crear un ambiente acogedor, brindando información clara y respondiendo a todas las preguntas y preocupaciones.</div>

                    <div>En nuestra clínica dental, su salud bucal está en las mejores manos. Nos comprometemos a proporcionar un cuidado dental excepcional y a ayudarlo a alcanzar una sonrisa saludable y hermosa que dure toda la vida.</div>
                </div>
            </div>
        </div>
    );
}