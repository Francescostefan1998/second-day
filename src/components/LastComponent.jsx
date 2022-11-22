import { Component } from "react"
import { Container, Button, Card } from "react-bootstrap"
import fantasy from '../books/fantasy.json'

class LastComponent extends Component{
render(){

return (
    <Container id="display-book" className="row">

        {fantasy.map((book) => (
  
  <Card className="col-4 col-md-3 col-lg-2"key={book.asin}>
  <Card.Img variant="top" src={book.img} />
  <Card.Body>
    <Card.Title id="wrap">{book.title}</Card.Title>
    <Card.Text>
    £{book.price}
    </Card.Text>
    <Button variant="primary">Read me</Button>
  </Card.Body>
</Card>
        ))}

</Container>
)
}}
export default LastComponent