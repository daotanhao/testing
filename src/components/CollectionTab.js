import React from 'react';

const CollectionTab = ({
  collections,
  activeCollectionId,
  onSelectCollection,
}) => {
  return (
    <div>
      {collections.map((collection) => (
        <div
          key={collection.id}
          onClick={() => onSelectCollection(collection.id)}
          className={`collection-tab ${
            collection.id === activeCollectionId ? 'active' : ''
          }`}
        >
          {collection.name}
        </div>
      ))}
    </div>
  );
};
export default CollectionTab;
