import { useState } from 'react';

function useHover() {
  const [hover, setHover] = useState(false);
  function onMouseOver() {
    setHover(true);
  }
  function onMouseOut() {
    setHover(false);
  }
  return [hover, onMouseOut, onMouseOver];
}
export default useHover;