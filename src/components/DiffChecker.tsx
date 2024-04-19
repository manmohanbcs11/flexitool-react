import { ChangeEvent, useEffect, useState } from 'react';
import { Utils } from '../controller/utils';

const DiffChecker: React.FC = () => {
  const [text1, setText1] = useState<string>('');
  const [text2, setText2] = useState<string>('');
  const [text1Lines, setText1Lines] = useState<string[]>([]);
  const [text2Lines, setText2Lines] = useState<string[]>([]);
  const [isDiff, setIsDiff] = useState<boolean>();
  const [eachLineDiff, setEachLineDiff] = useState<Map<number, boolean>>(new Map());
  const [showPreview, setShowPreview] = useState<boolean>(false); // Added state to control preview visibility

  useEffect(() => {
    setText1Lines(text1.split('\n'));
  }, [text1]);

  useEffect(() => {
    setText2Lines(text2.split('\n'));
  }, [text2]);

  const handleDiffCheck = () => {
    if (Utils.isEmpty(text1) || Utils.isEmpty(text2)) {
      alert('Please enter some text in both fields.');
      return;
    }

    setIsDiff(false);
    const minLength = Math.min(text1Lines.length, text2Lines.length);
    const newDiffMap = new Map<number, boolean>();

    for (let i = 0; i < minLength; i++) {
      if (text1Lines[i] === text2Lines[i]) {
        newDiffMap.set(i, false);
      } else {
        setIsDiff(true);
        newDiffMap.set(i, true);
      }
    }

    for (let i = minLength; i < text1Lines.length; i++) {
      setIsDiff(true);
      newDiffMap.set(i, true);
    }

    for (let i = minLength; i < text2Lines.length; i++) {
      setIsDiff(true);
      newDiffMap.set(i, true);
    }

    setEachLineDiff(newDiffMap);
    setShowPreview(true); // Show preview after checking differences
  }

  useEffect(() => {
    console.log(isDiff);
    console.log(eachLineDiff);
  }, [isDiff, eachLineDiff]);

  return (
    <>
      <div className="container">
        <p>Diff Checker Utility is a text utility that helps you to check the difference between two paragraphs.</p>
        <br />
        <h5>To check the difference between two paragraphs, just enter them below:</h5>
        <div className="d-flex mb-3">
          <textarea className="form-control mx-2" value={text1} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText1(e.target.value)} id="myBox1" rows={10}></textarea>
          <textarea className="form-control" value={text2} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText2(e.target.value)} id="myBox2" rows={10}></textarea>
        </div>
        <div className="d-grid justify-content-center">
          <button className="btn btn-primary mx-1 my-1" disabled={Utils.isEmpty(text1) || Utils.isEmpty(text2)} onClick={handleDiffCheck}>Check Difference</button>
        </div>
      </div>

      {showPreview && // Only render preview if showPreview is true
        (isDiff ?
          <div className="container my-4" >
            <h3 style={{ color: '#c92b2b', backgroundColor: '#b5bdba', border: '1px dashed #a38a99', borderRadius: '2px', padding: '5px 5px' }}>Preview of the difference summary is below:</h3>
            <div className="diff-summary d-flex">
              <div className="flex-grow-1 me-2" style={{ border: '1px dotted grey', borderRadius: '2px', padding: '5px 5px' }}>
                {text1Lines.map((line, index) => (
                  <p key={index} style={{ color: 'black', backgroundColor: eachLineDiff.get(index) ? '#f796a7ba' : '#a0e3cd', width: '100%', display: 'inline' }}>{line}<br /></p>
                ))}
              </div>
              <div className="flex-grow-1" style={{ color: 'black', border: '1px dotted grey', borderRadius: '2px', padding: '5px 5px' }}>
                {text2Lines.map((line, index) => (
                  <p key={index} style={{ color: 'black', backgroundColor: eachLineDiff.get(index) ? '#f796a7ba' : '#a0e3cd', width: '100%', display: 'inline' }}>{line}<br /></p>
                ))}
              </div>
            </div>
          </div> :
          <div className="container my-4">
            <h3 style={{ color: 'black', backgroundColor: '#9ad7a8', border: '1px dashed #a38a99', borderRadius: '2px', padding: '5px 5px' }}>There is no difference between the two paragraphs.</h3>
          </div>
        )}
    </>
  );
}

export default DiffChecker;
