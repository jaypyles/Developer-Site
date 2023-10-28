import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Website from "./common/WEBSITE.md";
import Nav from "react-bootstrap/Nav";

export default function App() {
  return (
    <div className="App">
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <PageComponent />
    </div>
  );
}

const PageComponent = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(Website)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="post">
      <ReactMarkdown children={content} />
    </div>
  );
};
