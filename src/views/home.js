import React, { useEffect, useState } from "react";
import { getFirestore, collection } from "firebase/firestore";
import { getDocs, query, where } from "firebase/firestore";
const Home = (props) => {
  const { context } = props;

  const [devices, setDevices] = useState(null);

  useEffect(() => {
    const getDevices = async () => {
      const { auth, loading } = context;
      const { uid } = auth.user;
      const documents = collection(getFirestore(), "devices");
      const q = query(documents, where("owner", "==", uid));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setDevices([]);
      }
      const data = querySnapshot.docs.map((device) => ({
        id: device.id,
        ...device.data(),
      }));
      setDevices(data);
      loading(false);
    };
    context.loading(true);
    getDevices();
  }, [context]);
  return (
    <section>
      <h1>Home Screen </h1>

      {devices?.map((device) => (
        <article key={device.id}>
          <h2>{device.name}</h2>
          <ul>
            <li>AC: {device.state.on ? "ON" : "OFF"}</li>
            <li>Tempreture: {device.state.temp}</li>
            <li>Fan: {device.state.fan}</li>
            <li>Location: {device.location}</li>
          </ul>
        </article>
      ))}
    </section>
  );
};
export default Home;
