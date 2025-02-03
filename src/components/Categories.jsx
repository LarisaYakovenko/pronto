import React from 'react';

const Categories = ({ value, onClickCategory }) => {
  const categories = ['Всі', "М'ясні", "Без м'яса", 'Гриль', 'Гострі', 'Міні'];
  return (
    <div className="categories">
      <ul>
        {categories.map((nameCategory, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={value === i ? 'active' : ''}
          >
            {nameCategory}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
