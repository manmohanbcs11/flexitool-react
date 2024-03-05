import { GetDynamicStyle } from "../controller/getDynamicStyle";

interface AboutProps {
    mode: string
}

export default function About(props: AboutProps) {
    const currentStyle = new GetDynamicStyle(props.mode);
    const myStyle = currentStyle.getStyle();

    return (
        <div className='container' style={myStyle}>
            <h1 className="my-3" style={myStyle}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <strong>Analyze Your text </strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapsed" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This utility serves as an application, allowing users to input text and convert it to their desired format. Its primary features include converting text to uppercase or lowercase, removing unnecessary spaces, reversing the text, clearing the input, copying to the clipboard, and counting words and characters.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Calculate Age </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapsed" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Additionally, this utility doubles as an application called The Age Calculator, which can ascertain the age or duration between two dates. The resulting age will be presented in years, months, and days.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Free to use </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This TextUtility and AgeUtility are entirely free to use and aids users requiring text modifications such as converting text to uppercase or lowercase, removing unnecessary spaces, reversing the text, clearing the input, copying to the clipboard, and counting words and characters.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <strong>Browser Compatible </strong>
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This utility functions run seamlessly on any web browser, including Chrome, Firefox, Internet Explorer, Safari, and Opera. It is suitable for counting characters in various contexts such as Facebook posts, blogs, books, Excel documents, PDFs, essays, and calculating Age.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
