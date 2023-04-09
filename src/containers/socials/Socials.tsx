import { createClient } from "@sanity/client";
import { useEffect, useState } from "react";
import "./socials.css";

const client = createClient({
  projectId: import.meta.env.VITE_PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_PUBLIC_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
});

interface Pet {
  _id: string;
  _type: string;
  name: string;
}

const Socials = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    async function fetchPets() {
      const petsData = await client.fetch<Pet[]>(`*[_type == "pet"]`);
      setPets(petsData);
    }

    fetchPets();
  }, []);

  console.log(pets);

  return (
    <div className="socials__container">
      <div className="socials__title">Socials</div>
      <div className="socials__posts-container">
        {pets.map((pet) => (
          <div key={pet._id}>
            <div>ID: {pet._id}</div>
            <div>Type: {pet._type}</div>
            <div>Name: {pet.name}</div>
            {/* Add any other properties you want to display */}
          </div>
        ))}
        {pets.length}
      </div>
    </div>
  );
};

export default Socials;
