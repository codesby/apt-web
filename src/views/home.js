import React, { useEffect, useState } from "react";
import { getFirestore, collection } from "firebase/firestore";
import { getDocs, query, where } from "firebase/firestore";
import DeviceCard from "components/device-card";

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
      {devices?.map((device) => (
        <DeviceCard device={device} key={device.id} />
      ))}
    </section>
  );
};
export default Home;
