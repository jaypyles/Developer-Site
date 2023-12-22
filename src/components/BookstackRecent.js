import React, { useState, useEffect } from "react";
import Constants from "../constants";

const BookstackRecent = () => {
  const [pageURL, setPageURL] = useState("");
  const url = `${Constants.DOMAIN}/api/bookstack/recent-page`;

  const fetchBookstack = async () => {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setPageURL(JSON.parse(data));
      } else {
        console.error("Failed to fetch from API: ", res.status);
      }
    } catch (error) {
      console.error("Failed to fetch from API: ", error);
    }
  };

  useEffect(() => {
    fetchBookstack();
  }, []);

  return (
    <div className="bookstack-recent">
      {pageURL ? (
        <p>
          Most recent note: <a href={pageURL.url}>{pageURL.url}</a>
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BookstackRecent;
