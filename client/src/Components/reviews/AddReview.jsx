import React, { useState, useEffect } from 'react';
import OverallRating from './OverallRating.jsx';
import Recommend from './Recommend.jsx';
import Comfort from './Comfort.jsx';
import Fit from './Fit.jsx';
import Length from './Length.jsx';
import Quality from './Quality.jsx';
import postReview from './helpers/postReview.js';
import Size from './Size.jsx';
import Width from './Width.jsx';

function AddReview(props) {
  const [isRecommended, setIsRecommended] = useState(true);
  const [starRating, setStarRating] = useState(0);
  const [comfort, setComfort] = useState(0);
  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);
  const [fit, setFit] = useState(0);
  const [length, setLength] = useState(0);
  const [quality, setQuality] = useState(0);
  const [charMin, setCharMin] = useState(50);
  const [review, setReview] = useState('');
  const [summary, setSummary] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [files, setFiles] = useState([]);
  const [filesSRC, setFilesSRC] = useState([]);
  const [error, setError] = useState(false);
  const overlayMode = `addReview overlay ${props.mode}`;
  const reviewMode = `writeReview ${props.mode}`;
  const xBorderMode = `addReview xBorder ${props.mode}`;

  const recommended = (boolean) => {
    setIsRecommended(boolean);
  };

  const handleStarRating = (number) => {
    const rating = number;
    setStarRating(rating);
  };

  const handleComfort = (number) => {
    setComfort(number);
  };
  const handleSize = (number) => {
    setSize(number);
  };
  const handleWidth = (number) => {
    setWidth(number);
  };
  const handleLength = (number) => {
    setLength(number);
  };
  const handleFit = (number) => {
    setFit(number);
  };
  const handleQuality = (number) => {
    setQuality(number);
  };
  const handleSummary = (e) => {
    const text = e.target.value;
    setSummary(text);
  };
  const handleReviewChange = (e) => {
    const text = e.target.value;
    setReview(text);
    let min = 50 - text.length;
    if (min < 0) {
      min = 0;
    }
    setCharMin(min);
  };
  const handleName = (e) => {
    const text = e.target.value;
    setName(text);
  };
  const handleEmail = (e) => {
    const text = e.target.value;
    setEmail(text);
  };

  const handleFiles = (e) => {
    const imgCont = document.getElementById('reviewIMG');
    const img = document.createElement('img');
    for (let i = 0; i < e.target.files.length; i += 1) {
      img.src = URL.createObjectURL(e.target.files[i]);
      img.className = 'reviewIMG';
      imgCont.appendChild(img);
      if (files.length < 5) {
        setFiles(files.concat(e.target.files[i]));
      }
      if (filesSRC.length < 5) {
        setFilesSRC(filesSRC.concat(img.src));
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData();
    // files.forEach(file => {
    //   data.append('file', file);
    // });
    const photos = files.map(file => {
      return `urlplaceholder/${file.name}`;
    });
    const info = {
      product_id: props.product.id,
      rating: Number(starRating),
      summary: summary,
      body: review,
      recommend: isRecommended,
      name: name,
      email: email,
      photos: filesSRC,
      characteristics: {
        64742: Number(fit),
        64744: Number(comfort),
        64743: Number(length),
        64745: Number(quality),
        64073: Number(width),
        64072: Number(size),
      },
    };
    postReview(info);
    // const data = new FormData()
    // for (var i = 0; i < files.length; i++) {
    //   data.append('file', files[i]);

  // axios.post('/reviews', data, auth)
    // }
    props.reviews();
  };
  return (
    <div className={overlayMode}>
      <div
        className={xBorderMode}
        onClick={props.closeReview}>
        <span className="addReview closeX">+</span>
      </div>
      <div className="addReview container">
        <h1>Write Your Review</h1>
        <h3>About the {props.product.name}
        </h3>
        <div id='writeReviewContainer'>
          <div className={reviewMode}>
            <form
              onSubmit={onSubmit}
              id='addReview'>
              <OverallRating handleStarRating={handleStarRating} />
              <div className='summaryContainer'>
                <label className='bold'>
                  Review Summary: <br></br>
                  <textarea
                    type='text'
                    placeholder='Best purchase ever!'
                    maxLength='60'
                    onChange={handleSummary}>
                  </textarea>
                </label><br></br>
                <label className='bold'>
                  Review: <br></br>
                  <textarea
                    type='textArea'
                    placeholder='Why did you like the product or not?'
                    maxLength='1000'
                    minLength='50'
                    onChange={handleReviewChange}
                    required >
                  </textarea>
                </label><br></br>
                <span className='reviewMinCharacters'>
                  {charMin > 50
                    ? 'Minimum Reached'
                    : `Minimum required characters left: ${charMin}`}
                </span><br></br>
                <label className='bold'>
                  NickName: <br></br>
                  <input
                    type='text'
                    placeholder='jackson11!'
                    maxLength='60'
                    onChange={handleName}
                    required></input>
                </label><br></br>
                  <span
                    className='reviewMinCharacters'>
                      For privacy reasons, do not use your full name or email address
                    </span><br></br>
                <label className='bold'>
                  Email: <br></br>
                  <input
                    type='email'
                    placeholder='jackson11@email.com'
                    maxLength='60'
                    onChange={handleEmail}
                    required></input>
                </label><br></br>
                  <span
                    className='reviewMinCharacters'>
                      For authentication reasons, you will not be emailed
                    </span><br></br>
                <Recommend
                recommended={recommended}
                className='pointer' />
                <Size
                handleSize={handleSize}
                className='pointer' />
                <Comfort
                handleComfort={handleComfort}
                className='pointer' />
                <Fit
                handleFit={handleFit}
                className='pointer' />
                <Length
                handleLength={handleLength}
                className='pointer' />
                <Width
                handleWidth={handleWidth}
                className='pointer' />
                <Quality
                handleQuality={handleQuality}
                className='pointer' />
                <label className="bold">Add Photo: <br></br>
                  <input
                  type='file'
                  name='files'
                  accept='image/*'
                  className='form-control'
                  multiple
                  onChange={handleFiles}></input>
                </label>
                <div id='reviewIMG'>

                </div>
              </div>
              <input type='submit'></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddReview;
