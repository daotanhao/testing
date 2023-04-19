import React from 'react';

const CollectionContent = ({ activeCollection }) => {
  return (
    <div>
      <h2>{activeCollection.name}</h2>
      {/* Hiển thị các request item trong activeCollection */}
    </div>
  );
};

export default CollectionContent;
