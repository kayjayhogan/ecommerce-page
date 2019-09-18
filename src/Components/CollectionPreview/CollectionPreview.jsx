import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem.jsx';
import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='preview-title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, i) => i < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps}/>
        ))}
    </div>
  </div>
);

export default CollectionPreview;