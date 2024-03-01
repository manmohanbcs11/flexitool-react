import { ChangeEvent, useState } from 'react';


interface Props {
  heading: string;
  mode: string;
}

export default function TextForm(props: Props) {
  const handleUpperCaseClick = () => {
    setText(text.toUpperCase());
  }

  const handleLowerCaseClick = () => {
    setText(text.toLowerCase());
  }

  const handleExtraSpaces = () => {
    setText(text.split(/[ ]+/).join(' '));
  }

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  }

  const handleClearTextClick = () => {
    setText('');
  }

  const handleCopyClick = () => {
    let textArea = document.getElementById('myBox') as HTMLTextAreaElement;
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
  }

  const handleReverseClick = () => {
    setText(text.split('').reverse().join(''));
  }

  const countWords = (str: string) => {
    if (str === '' || str === null || str === undefined) {
      return 0;
    }

    let words = str.split(' ');
    return words.length;
  }

  const countChars = (str: string) => {
    return str.length;
  }

  const [text, setText] = useState<string>('');
  return (
    <>
      <div className="container my-2" style={{ color: (props.mode === 'light') ? '#042743' : 'white' }}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: (props.mode === 'light') ? 'white' : '#042743', color: (props.mode === 'light') ? '#042743' : 'white' }} id="myBox" rows={10}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCaseClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-1" onClick={handleReverseClick}>Reverse Text</button>
        <button className="btn btn-primary mx-1" onClick={handleClearTextClick}>Clear Text</button>
      </div>
      <div className="container my-2" style={{ color: (props.mode === 'light') ? '#042743' : 'white' }}>
        <h2>Text Summary</h2>
        <p>{countWords(text)} words and {countChars(text)} characters</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something in textbox above to preview.'}</p>
      </div>
    </>
  );
}
