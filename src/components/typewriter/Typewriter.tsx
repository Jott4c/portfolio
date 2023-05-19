import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  text: string;
  speed: number;
}

const Text = styled.p``;

const Typewriter: React.FC<Props> = ({ text, speed }) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setTypedText((prevTypedText) => prevTypedText + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <Text>{typedText}</Text>;
};

export default Typewriter;
