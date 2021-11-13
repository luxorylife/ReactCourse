import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddPost.scss';

const AddPost = () => {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
  });

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result) {
        console.log(`Статья с id №${result.id} добавлена!`);
        navigate('/blog');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add-post-wrapper">
      <h1>Пасту напиши</h1>

      <form
        onSubmit={(event) => {
          onSubmitHandler(event);
        }}
      >
        <label>
          Наименование
          <input
            className="title"
            type="text"
            placeholder="Заголовок"
            value={formData.title}
            onChange={(event) => {
              setFormData({
                ...formData,
                title: event.target.value,
              });
            }}
          />
        </label>

        <label>
          Текст статьи
          <textarea
            value={formData.text}
            onChange={(event) => {
              setFormData({
                ...formData,
                text: event.target.value,
              });
            }}
            placeholder="Текст"
            cols="34"
            rows="10"
          ></textarea>
        </label>

        <button type="submit">Записать</button>
      </form>
    </div>
  );
};

export default AddPost;
