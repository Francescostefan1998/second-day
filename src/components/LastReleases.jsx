import { Component } from "react"
import { Container, Carousel } from "react-bootstrap"
import fantasy from '../books/fantasy.json'

class LastReleases extends Component{
render(){

return (
    <Container id="smaller">
        
    <Carousel interval={1005}>
        {fantasy.map((book) => (
  <Carousel.Item key={book.asin}>
    <div className="black"></div>
    <img
      className="d-block w-100"
      src={book.img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{book.title}</h3>
      <p>{book.price}</p>
    </Carousel.Caption>
  </Carousel.Item>
        ))}
    </Carousel>
</Container>
)
}}
export default LastReleases