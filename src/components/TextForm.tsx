import { ChangeEvent, useState } from 'react';
import { GetDynamicStyle } from '../controller/getDynamicStyle';
import { Utils } from '../controller/utils';


interface Props {
  mode: string;
  showAlert: (type: string, message: string) => void;
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
    navigator.clipboard.writeText(text);
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
      <div className="container">
        <p style={{ color: textColor }}>Text Utility serves as an application, allowing users to input text and convert it to their desired format. Its primary features include converting text to uppercase or lowercase, removing unnecessary spaces, reversing the text, clearing the input, copying to the clipboard, and counting words and characters.</p>
        <br />
        <h5 style={{ color: textColor }}>To format and play with your text, just enter it below:</h5>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={myStyle} id="myBox" rows={10}></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" disabled={Utils.isEmpty(text)} onClick={handleUpperCaseClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={Utils.isEmpty(text)} onClick={handleLowerCaseClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={Utils.isEmpty(text)} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1 my-1" disabled={Utils.isEmpty(text)} onClick={handleCopyClick}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-1 my-1" disabled={Utils.isEmpty(text)} onClick={handleReverseClick}>Reverse Text</button>
        <button className="btn btn-primary mx-1 my-1" disabled={Utils.isEmpty(text)} onClick={handleClearTextClick}>Clear Text</button>
      </div>
      <br />
      <div className="container my-2" style={{ color: textColor }}>
        <h3>Text Summary</h3>
        <p>{countWords(text)} words and {countChars(text)} characters</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
      </div>
    </>
  );
}
