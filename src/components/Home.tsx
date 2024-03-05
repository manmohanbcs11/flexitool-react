import { GetDynamicStyle } from '../controller/getDynamicStyle';

interface HomeProps {
  mode: string
}

export default function Home(props: HomeProps) {
  const currentStyle = new GetDynamicStyle(props.mode);
  const myStyle = currentStyle.getStyle();

  return (
    <div>
      <p className='container' style={myStyle}>Flexitools is a utility that enables users to input text and convert it to their preferred format. Its key features include converting text to uppercase or lowercase, removing unnecessary spaces, reversing the text, clearing the input, copying to the clipboard, and counting words and characters. Additionally, this tool includes an Age Calculator feature where users can determine the age or interval between two dates.</p>
    </div>
  )
}