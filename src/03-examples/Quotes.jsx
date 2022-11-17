import { useLayoutEffect, useState, useRef } from "react";

export const Quotes = ({ quote, author }) => {
  const [boxSize, setBoxSize] = useState({width: 0, height: 0});
  const pRef = useRef();

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({width, height});
  }, [quote])
  
  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-1">{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
