import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../firestore.config";

export default function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collec = collection(db, "projects");
        const docs = await getDocs(collec);
        const documents = docs.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(documents);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      Projects
    </>
  );
}
