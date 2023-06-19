// EventContext.js
import React, { createContext, useContext, useState } from 'react';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState({});

  const subscribe = (eventName, handler) => {
    setSubscriptions((prevSubscriptions) => ({
      ...prevSubscriptions,
      [eventName]: [...(prevSubscriptions[eventName] || []), handler],
    }));
  };

  const publish = (eventName, data) => {
    const eventSubscriptions = subscriptions[eventName] || [];
    eventSubscriptions.forEach((handler) => handler(data));
  };

  return (
    <EventContext.Provider value={{ subscribe, publish }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = (eventName, handler) => {
  const { subscribe, publish } = useContext(EventContext);

  subscribe(eventName, handler);

  return () => {
    const eventSubscriptions = subscriptions[eventName] || [];
    const updatedSubscriptions = eventSubscriptions.filter(
      (sub) => sub !== handler
    );
    setSubscriptions((prevSubscriptions) => ({
      ...prevSubscriptions,
      [eventName]: updatedSubscriptions,
    }));
  };
};
