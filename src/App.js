import React, { useState } from "react";
import { Button, Container, Card, Stack, Row, Col } from "react-bootstrap";
import { quotesBank as quotes } from "./data/quotes";
import "./App.css";

const Data = ({ quote, handleNewQuote }) => {
  return (
    <Row className="justify-content-md-center">
      <Col md={6}>
        <Card>
          <Card.Body className="text-center">
            <div id="quote-box">
              <Card.Text>
                <div id="text">{quote.quote}</div>
              </Card.Text>
              <Card.Title>
                <div id="author">{quote.author}</div>
              </Card.Title>
              <Stack direction="horizontal" gap={3} className="col-md-5 mx-auto">
                <Button className="m-2" id="new-quote" onClick={handleNewQuote}>
                  New Quote
                </Button>
                <a href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" id="tweet-quote">
                  <i>Post On Twitter</i>
                </a>
              </Stack>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

const randomNumber = () => {
  let number = quotes.length;
  let random = Math.floor(Math.random() * number);
  return random;
};

function App() {
  const [quote, setQuote] = useState(quotes[randomNumber()]);
  const handleNewQuote = () => {
    setQuote(quotes[randomNumber()]);
  };

  return (
    <Container>
      <Data quote={quote} handleNewQuote={handleNewQuote} />
    </Container>
  );
}

export default App;
