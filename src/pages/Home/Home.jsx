import React from "react";
import "./Home.css"
import teeth from "../../img/Home/Top/teeth.jpg";
import section1 from "../../img/Home/AccompanyYou/section1.jpg";
import section2 from "../../img/Home/AccompanyYou/section2.jpg";
import section3 from "../../img/Home/AccompanyYou/section3.jpg";
import treatmentsSection1 from "../../img/Home/Treatments/section1.jpg";
import treatmentsSection2 from "../../img/Home/Treatments/section2.jpg";
import treatmentsSection3 from "../../img/Home/Treatments/section3.jpg";
import treatmentsSection4 from "../../img/Home/Treatments/section4.jpg";
import treatmentsSection5 from "../../img/Home/Treatments/section5.jpg";
import treatmentsSection6 from "../../img/Home/Treatments/section6.jpg";
export const Home = () => {
    return (
        <div className="homeStyle">
            <div className="bodyHome">
                <div className="topHome">
                    <img src={teeth} />
                </div>
                <div className="accompanyYou">
                    <div className="accompanyYouTitle">
                        Permanecemos a tu lado hasta el final
                    </div>
                    <div className="accompanyYouText">
                        Nuestra prioridad absoluta es la de brindar un servicio de excelencia que garantice los mejores resultados. Por eso, permanecemos a tu lado en todo momento. Somos conscientes de la importancia de un servicio de calidad, así que te acompañamos a lo largo de tu tratamiento. De esta manera estarás informado/a en todo momento.
                    </div>
                    <div className="accompanyYouSections">
                        <div className="section">
                            <div className="sectionImg">
                                <img src={section1}/>
                            </div>
                            <div className="sectionTitle">
                                Primera consulta <span className="blueColor">Gratuita</span>
                            </div>
                            <div className="sectionText">
                                La mejor manera de que nos conozcas, es en persona. Por eso te ofrecemos la primera consulta totalmente gratis. Te haremos una revisión general y te informaremos de lo que podemos hacer para ayudarte.
                            </div>
                        </div>
                        <div className="section">
                            <div className="sectionImg">
                                <img src={section2}/>
                            </div>
                            <div className="sectionTitle">
                                Diagnóstico
                            </div>
                            <div className="sectionText">
                                Contamos con lo último en tecnología. De esta manera podemos garantizar un diagnóstico de alta calidad. En nuestra clínica pensamos que lo más importante es conocer el problema. Por eso contamos con la mejor tecnología del sector.
                            </div>
                        </div>
                        <div className="section">
                            <div className="sectionImg">
                                <img src={section3}/>
                            </div>
                            <div className="sectionTitle">
                                Tratamiento
                            </div>
                            <div className="sectionText">
                                Con la ayuda de nuestros profesionales y junto con el diagnóstico que habremos realizado, te ofreceremos un tratamiento personalizado. La mejor atención en cada caso.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="treatments" id="treatments">
                    <div className="treatmentsTitle">
                        Nuestros servicios
                    </div>
                    <div className="treatmentsSection">
                        <div className="treatmentsImg">
                            <img src={treatmentsSection1}  alt="Ortodoncia"/>
                            <div className="cardName">Ortodoncia</div>
                        </div>
                        <div className="treatmentsImg">
                            <img src={treatmentsSection2}  alt="Implantes"/>
                            <div className="cardName">Implantes</div>
                        </div>
                        <div className="treatmentsImg">
                            <img src={treatmentsSection3}  alt="Endodoncia"/>
                            <div className="cardName">Endodoncia</div>
                        </div>
                        <div className="treatmentsImg">
                            <img src={treatmentsSection4}  alt="Estética dental"/>
                            <div className="cardName">Estética dental</div>
                        </div>
                        <div className="treatmentsImg">
                            <img src={treatmentsSection5} alt="Odontopediatria"/>
                            <div className="cardName">Odontopediatria</div>
                        </div>
                        <div className="treatmentsImg">
                            <img src={treatmentsSection6} alt="Otros Tratamientos"/>
                            <div className="cardName">Otros Tratamientos</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}