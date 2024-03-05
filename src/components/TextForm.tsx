import { ChangeEvent, useState } from 'react';
import { GetDynamicStyle } from '../controller/getDynamicStyle';
import { Utils } from '../controller/utils';


interface Props {
  heading: string;
  mode: string;
  showAlert: any;
}

export default function TextForm(props: Props) {
  const [text, setText] = useState<string>('');

  const showDanger = () => {
    if (Utils.isEmpty(text)) {
      return props.showAlert('danger', 'Please enter some text.');
    }
  }

  const handleUpperCaseClick = () => {
    showDanger();
    setText(text.toUpperCase());
    props.showAlert('success', 'Converted to Uppercase.');
  }

  const handleLowerCaseClick = () => {
    showDanger();
    setText(text.toLowerCase());
    props.showAlert('success', 'Converted to Lowercase.');
  }

  const handleExtraSpaces = () => {
    showDanger();
    setText(text.split(/[ ]+/).join(' '));
    props.showAlert('success', 'Removed Extra Spaces.');
  }

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  }

  const handleClearTextClick = () => {
    setText('');
    props.showAlert('success', 'Text is cleared.');
  }

  const handleCopyClick = () => {
    showDanger();
    let textArea = document.getElementById('myBox') as HTMLTextAreaElement;
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    props.showAlert('success', 'Copied to Clipboard.');
  }

  const handleReverseClick = () => {
    showDanger();
    setText(text.split('').reverse().join(''));
    props.showAlert('success', 'Reversed the Text.');
  }

  const countWords = (str: string) => {
    if (str === '' || str === null || str === undefined) {
      return 0;
    }

    let words = str.trim().split(/\s+/);
    return words.length;
  }

  const countChars = (str: string) => {
    return str.length;
  }

  const currentStyle = new GetDynamicStyle(props.mode);
  const textColor = currentStyle.textColor();
  const myStyle = currentStyle.getStyle();

  return (
    <>
      <div className="container my-2">
        <p><i style={{ color: textColor }}>This utility serves as an application, allowing users to input text and convert it to their desired format. Its primary features include converting text to uppercase or lowercase, removing unnecessary spaces, reversing the text, clearing the input, copying to the clipboard, and counting words and characters.</i></p>
        <br />
        <h2 style={{ color: textColor }}>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={myStyle} id="myBox" rows={10}></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowerCaseClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Reverse Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearTextClick}>Clear Text</button>
      </div>
      <br />
      <div className="container my-2" style={{ color: textColor }}>
        <h2>Text Summary</h2>
        <p>{countWords(text)} words and {countChars(text)} characters</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something in textbox above to preview.'}</p>
      </div>
    </>
  );
}
