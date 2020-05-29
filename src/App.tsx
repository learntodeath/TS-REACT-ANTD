import React from 'react';
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
function App() {
  return (
    <div className="App">
      <Button className='btn btn-lg' btnType='link' size='sm' href='www.baidu.com'>按钮</Button>
      <Button className='btn btn-sm' btnType='primary'>按钮</Button>
      <Button className='btn btn-primary' btnType='danger'>按钮</Button>
      <Button className='btn btn-danger'>按钮</Button>
      <Menu defaultIndex='0' mode='vertical'>
        <MenuItem index='0'>
          123
        </MenuItem>
        <MenuItem index='1' disabled>
          123
        </MenuItem>
        <MenuItem index='2'>
          123
        </MenuItem>
      </Menu>
    </div>
  );
}

export default App;
