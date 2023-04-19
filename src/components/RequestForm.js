import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateJson, updateBody } from '../redux/requestSlice';
import {
  saveRequestToCollection,
  selectRequest,
} from '../redux/collectionSlice';
import { saveCollectionToList } from '../redux/listCollectionSlice';

const RequestForm = () => {
  const dispatch = useDispatch();
  const request = useSelector((state) => state.request);
  const collection = useSelector((state) => state.collection);
  const selectedRequest = useSelector(
    (state) => state.collection.selectedRequest
  );
  const [json, setJson] = useState('');
  const [body, setBody] = useState('');
  useEffect(() => {
    if (selectedRequest) {
      setBody(selectedRequest.body);
      setJson(selectedRequest.json);
    }
  }, [selectedRequest]);

  const handleJsonChange = (event) => {
    setJson(event.target.value);
    dispatch(updateJson(event.target.value));
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
    dispatch(updateBody(event.target.value));
    dispatch(selectRequest(null));
  };

  const handleSaveRequest = () => {
    dispatch(
      saveRequestToCollection({ json: request.json, body: request.body })
    );
    saveCollectionToList(collection);
    dispatch();
    setJson('');
    setBody('');
  };

  return (
    <div>
      <h2>Request Form</h2>
      <div>
        <label>Json:</label>
        <input type="text" value={json} onChange={handleJsonChange} />
      </div>
      <div>
        <label>Body:</label>
        <input type="text" value={body} onChange={handleBodyChange} />
      </div>
      <button onClick={handleSaveRequest}>Save</button>
    </div>
  );
};

export default RequestForm;
