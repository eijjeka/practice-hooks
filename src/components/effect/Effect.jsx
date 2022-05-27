import { useState, useEffect } from "react";
export const Effect = () => {
  ///What effect does
  useEffect(() => {
    const handler = () => {};
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  //   useEffect(function initPlugin() {
  //     somePlugin.init();

  //     return () => {
  //       somePlugin.destroy();
  //     };
  //   }, []);
  return <></>;
};
