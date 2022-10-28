import { useEffect, useRef } from "react";

const useInterval = (callback: any, delay: number) => {
  const savedCallback: any = useRef();

  useEffect(() => {
    // useEffect에 매개변수로 받은 콜백을 현재 Ref로 선언
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    // useEffect에 Ref의 current를 setInterval를 delay 시간동안 해준다
    let id = setInterval(tick, delay);
    // 언마운트 되기 전에 clear
    return () => clearInterval(id);
  }, []);
};

export default useInterval;
