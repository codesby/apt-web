import React, { useEffect } from "react";
const Home = ({ context }) => {
  useEffect(() => {
    context.loading(false);
  });
  return <div>Home Screen </div>;
};
export default Home;
