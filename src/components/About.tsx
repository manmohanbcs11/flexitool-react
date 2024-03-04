
interface AboutProps {
    mode: string
}

export default function About(props: AboutProps) {

    const textColor = () => {
        if (props.mode === 'light' || props.mode === 'white' || props.mode === 'grey') {
            return "#042743";
        } else {
            return "white";
        }
    }

    return (
        <div className='container' style={{ color: textColor() }}>
            <br/>
            <p><i>This website serves as a text utility application, allowing users to input text and convert it to their desired format. Its primary features include converting text to uppercase or lowercase, removing unnecessary spaces, reversing the text, clearing the input, copying to the clipboard, and counting words and characters.</i></p>
            <br/>
        </div>
    )
}
