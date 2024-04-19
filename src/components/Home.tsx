import { NavLink } from 'react-router-dom';
import { GetDynamicStyle } from '../controller/getDynamicStyle';

interface HomeProps {
  mode: string
}

export default function Home(props: HomeProps) {
  const currentStyle = new GetDynamicStyle(props.mode);
  const myStyle = currentStyle.getStyle();

  return (
    <div className='home-container'>
      <h3 style={{color: '#1d60a3'}}>Welcome to FlexiTool</h3>
      <p className='my-5' style={myStyle}>FlexiTool is a versatile utility designed to streamline various tasks into one convenient platform. Here are the key features it offers:</p>
      <div >
        <ul>
          <li className='my-4'>Input text and convert it to your preferred format. Formats include converting to uppercase, lowercase, removing unnecessary spaces, reversing the text, clearing the input, copying to the clipboard, and counting words and characters. If you'd like to play or experiment with your text in real-time, <NavLink to='/text'>click here.</NavLink></li>
          <li className='my-4'>The tool also includes an Age Calculator feature, allowing users to determine the age or interval between two dates. Whether you need to calculate the time difference between two dates or find out someone's exact age, <NavLink to='/age'>click here.</NavLink></li>
          <li className='my-4'>Are you struggling to differentiate between two paragraphs? Spotting differences can be challenging, especially with lengthy paragraphs. To find the differences between your paragraphs quickly, <NavLink to='/diffcheck'>click here.</NavLink></li>
        </ul>
      </div>
    </div>
  )
}