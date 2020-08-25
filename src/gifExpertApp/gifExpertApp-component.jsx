import React, { useState } from "react";
import { AddCategory } from "../components/addCategory/addCategory-component";
import { GifGrid } from "../components/gifGrid/gifGrid-component";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
