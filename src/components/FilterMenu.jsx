/* eslint-disable react/prop-types */
import { Accordion, Form } from "react-bootstrap";
import MySlider from "./RangePrice";
import MySlider2 from "./RangeRating";
import { useState } from "react";

const CheckboxItem = ({ label, onChange }) => {
  return <Form.Check type='checkbox' label={label} onChange={onChange} />;
};

const FilterMenu = ({ onSelectCategory, onPriceChange, onRatingChange }) => {
  const [, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Categoria</Accordion.Header>
          <Accordion.Body>
            <CheckboxItem
              label='Flowers'
              onChange={() => handleCategoryChange("Flowers")}
            />
            <CheckboxItem
              label='Accessories'
              onChange={() => handleCategoryChange("Accessories")}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Precio</Accordion.Header>
          <Accordion.Body>
            <MySlider onPriceChange={onPriceChange} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header>Rating</Accordion.Header>
          <Accordion.Body>
            <MySlider2 onRatingChange={onRatingChange} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FilterMenu;
