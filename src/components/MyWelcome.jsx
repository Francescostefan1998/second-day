import { Jumbotron, Button } from "react-bootstrap";

const MyWelcome = ({ subtitle }) => (
    <Jumbotron id="jumb">
        <div className="black"></div>
  <h1>Welcome To My Library</h1>
  <p>
     {subtitle}
  </p>
  <p>
    <Button variant="primary">Start Reading</Button>
  </p>
</Jumbotron>

)

export default MyWelcome