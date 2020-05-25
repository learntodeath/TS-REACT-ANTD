import React from 'react';
import Button from './components/Button/button'
function App() {
  return (
    <div className="App">
      <Button className='btn btn-lg' btnType='link' size='sm' href='www.baidu.com'>按钮</Button>
      <Button className='btn btn-sm' btnType='primary'>按钮</Button>
      <Button className='btn btn-primary' btnType='danger'>按钮</Button>
      <Button className='btn btn-danger'>按钮</Button>
    </div>
  );
}

export default App;
