import React, { useRef } from 'react';

const ScrollToSection = () => {
  const ref = useRef();
  const data = [
    {
      label: 'First Section',
      style: {
        width: '100%',
        height: '600px',
        fontSize: "36px",
        color: "white",
        textAlign: "center",
        background: 'red',
      },
    },
    {
      label: 'Second Section',
      style: {
        width: '100%',
        height: '600px',
        fontSize: "36px",
        color: "white",
        textAlign: "center",
        background: 'Blue',
      },
    },
    {
      label: 'Third Section',
      style: {
        width: '100%',
        height: '600px',
        fontSize: "36px",
        color: "white",
        textAlign: "center",
        background: 'yellow',
      },
    },
    {
      label: 'Fourth Section',
      style: {
        width: '100%',
        height: '600px',
        fontSize: "36px",
        color: "white",
        textAlign: "center",
        background: 'green',
      },
    },
    {
      label: 'Fifth Section',
      style: {
        width: '100%',
        height: '600px',
        fontSize: "36px",
        color: "white",
        textAlign: "center",
        background: 'orange',
      },
    },
  ];

  const handleScroll = () => {
    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <h1>Scroll To a Particular Section</h1>
      <button onClick={handleScroll}>Click to Scroll</button>
      {data.map((item, index) => (
        <div ref={index === 3 ? ref : null} key={item.label} style={item.style}>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default ScrollToSection;
