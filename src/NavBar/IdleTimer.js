import React, { useEffect } from "react";
//formSession Time out code 
const IdleTimer = ({ children }) => {
  const events = [
    "load",
    "mousemove",
    "mousedown",
    "click",
    "scroll",
    "keypress",
    +6
  ];
  let timer;

  const resetTimer = () => {
    if (timer) clearTimeout(timer);
  };

  const handleTimer = () => {
    timer = setTimeout(() => {
      resetTimer();
      Object.values(events).forEach((item) => {
        window.removeEventListener(item, resetTimer);
      });
      logoutAction();
    }, 10000);
  };

  useEffect(() => {
    Object.values(events).forEach((item) => {
      window.addEventListener(item, () => {
        resetTimer();
        handleTimer();
      });
    });
  }, []);

  const logoutAction = () => {
    localStorage.clear();
    alert("Session will expires ")
    window.location.pathname = "/Login";
  };
  return children;
};

export default IdleTimer;