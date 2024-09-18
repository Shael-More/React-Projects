import { useState, useEffect } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const ImageSlider = ({ url, page = '1', limit = '5' }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImages = async (getURL) => {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    if (url !== '') fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading Data! Please Wait...</div>;
  }

  if (error !== null) {
    return <div>Error Occurred! {error}</div>;
  }

  const handleClick = () => {
    setCurrentSlide();
  };

  return (
    <div className='flex justify-center items-center relative w-[600px] h-[450px] shadow-sm'>
      <BsArrowLeft
        className='absolute w-8 h-8 text-white left-4 hover:bg-slate-400 p-1 rounded-full'
        onClick={handlePrevious}
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              // className=" "
              className={
                currentSlide === index ? 'w-full h-full rounded-lg' : 'hidden'
              }
            />
          ))
        : null}
      <span className='flex justify-center items-center absolute bottom-4'>
        {images && images.length
          ? images.map(( _, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={currentSlide === index ? "bg-white w-4 h-4 rounded-full m-1" : "bg-gray-500 w-4 h-4 rounded-full m-1" }
              ></button>
            ))
          : null}
      </span>
      <BsArrowRight
        className='absolute w-8 h-8 text-white right-4 hover:bg-slate-400 p-1 rounded-full'
        onClick={handleNext}
      />
    </div>
  );
};

export default ImageSlider;
