import React from 'react';
import MenuItem from '../MenuItem/MenuItem.jsx';
import './Directory.scss';

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {
    return <div className='directory-menu'>
      <MenuItem title='HATS' />
      <MenuItem title='JACKETS' />
      <MenuItem title='SNEAKERS' />
      <MenuItem title='WOMENS' />
      <MenuItem title='MENS' />
    </div>
  }
}

export default Directory;