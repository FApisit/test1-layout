import React, { useState } from 'react';
import { Col, Row } from 'antd';
import './App.css';

const App: React.FC = () => {
  const [shapes, setShapes] = useState([
    'shape1',
    'shape2',
    'shape3',
    'shape4',
    'shape5',
    'shape6',
  ]);

  const moveShapes = () => {
    setShapes((prevShapes) => {
      const updatedShapes = [...prevShapes];
      updatedShapes.push(updatedShapes.shift()!);
      return updatedShapes;
    });
  };

  const reverseMoveShapes = () => {
    setShapes((prevShapes) => {
      const updatedShapes = [...prevShapes];
      updatedShapes.unshift(updatedShapes.pop()!);
      return updatedShapes;
    });
  };

  const swapRowItems = () => {
    setShapes((prevShapes) => {
      const updatedShapes = [...prevShapes];
      const [firstRowShapes, secondRowShapes] = [
        updatedShapes.slice(0, 3),
        updatedShapes.slice(3),
      ];
      return [...secondRowShapes, ...firstRowShapes];
    });
  };

  const randomizeItemsPosition = () => {
    setShapes((prevShapes) => {
      const updatedShapes = [...prevShapes];
      for (let i = updatedShapes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [updatedShapes[i], updatedShapes[j]] = [updatedShapes[j], updatedShapes[i]];
      }
      return updatedShapes;
    });
  };

  return (
    <>
    <h3>การจัดการหน้าเว็บ</h3>
      <div className='btn-container'>
        <button className='btnleft' onClick={moveShapes}>
          <div className='shapeleft'></div>
        </button>
        <button className='btnswtich' onClick={swapRowItems}>
          <div className='shapemiddle1'></div>
          <div className='shapemiddle2'></div>
        </button>
        <button className='btnright' onClick={reverseMoveShapes}>
          <div className='shaperight'></div>
        </button>
      </div>
      <Row gutter={[16, 16]} className='allshape-container1' >
        {shapes.slice(0, 3).map((shape, index) => (
          <Col span={3} key={index}>
            <div className='btnshape' onClick={randomizeItemsPosition}>
              <div className={shape}></div>
            </div>
          </Col>
        ))}
      </Row>
      <Row gutter={[16, 16]} className='allshape-container2'>
        {shapes.slice(3).map((shape, index) => (
          <Col span={3} key={index}>
            <div className='btnshape' onClick={randomizeItemsPosition}>
              <div className={shape}></div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default App;
