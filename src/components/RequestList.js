import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectRequest } from '../redux/collectionSlice';
const RequestList = () => {
  const listCollection = useSelector((state) => state.listCollection);
  const requests = useSelector((state) => state.collection.requests);
  const dispatch = useDispatch();

  const handleRequestClick = (request) => {
    dispatch(selectRequest(request)); // Dispatch action selectRequest với request được chọn
  };
  return (
    <div>
      <h2>Request List</h2>
      <ul>
        {listCollection.map((collection) => (
          <>
            <li key={collection.id}>{collection.name}</li>
            <ul>
              {collection.requests.map((request) => (
                <li
                  onClick={() => handleRequestClick(request)}
                  key={request.id}
                >{`Json: ${request.json}, Body: ${request.body}`}</li>
              ))}
            </ul>
          </>
        ))}
      </ul>
    </div>
  );
};

export default RequestList;
