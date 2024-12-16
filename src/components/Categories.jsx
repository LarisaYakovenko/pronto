import React, { useState } from 'react';

const Categories = () => {
  const [active, setActive] = useState(0);
  const categories = ['Всі', "М'ясні", "Без м'яса", 'Гриль', 'Гострі', 'Міні'];
  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => setActive(i)}
            className={active === i ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
