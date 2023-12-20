import React, { useState, useEffect } from "react";

const Github = () => {
  const [githubURL, setGithubURL] = useState("");
  const domain = process.env.REACT_APP_DOMAIN;
  const url = `${domain}/api/github/recent`;

  const fetchGithub = async () => {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setGithubURL(JSON.parse(data));
      } else {
        console.error("Failed to fetch Github data:", res.status);
      }
    } catch (error) {
      console.error("Failed to fetch Github data:", error);
    }
  };

  useEffect(() => {
    // fetch most recent on mount
    fetchGithub();
  }, []);

  return (
    <div className="github text-center">
      {githubURL ? (
        <>
          <p>
            Most recent project: <a href={githubURL.url}>{githubURL.url}</a>
          </p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Github;
