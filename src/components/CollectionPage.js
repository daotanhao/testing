import React, { useState } from 'react';
import CollectionTab from './CollectionTab';
import CollectionContent from './CollectionContent';

const CollectionPage = ({ collections }) => {
  const [activeCollectionId, setActiveCollectionId] = useState(null);

  const handleSelectCollection = (collectionId) => {
    setActiveCollectionId(collectionId);
  };

  const activeCollection = collections.find(
    (collection) => collection.id === activeCollectionId
  );

  return (
    <div>
      {/* Hiển thị danh sách các collection tabs */}
      <CollectionTab
        collections={collections}
        activeCollectionId={activeCollectionId}
        onSelectCollection={handleSelectCollection}
      />
      {/* Hiển thị nội dung của collection tab đang được chọn */}
      {activeCollection && (
        <CollectionContent activeCollection={activeCollection} />
      )}
    </div>
  );
};

export default CollectionPage;
