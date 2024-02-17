import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import img1 from './Images/img3.jpg'
import img2 from './Images/img1.jpg'
import img3 from './Images/img2.jpg'

import "./Events.css";
const data = [
    {
        image: require('./Images/more.jpeg'),
        // caption: "Caption",
        // description: "Make sure to experience it at least once; it's definitely worth a visit."
    },
    {
        image: require('./Images/24.jpg'),
        // caption: "Caption",
        // description: "Make sure to experience it at least once; it's definitely worth a visit."
    },
    {
        image: require('./Images/17.jpg'),
        // caption: "Caption",
        // description: "Make sure to experience it at least once; it's definitely worth a visit."
    },
    {
        image: require('./Images/9.jpg'),
        // caption: "Caption",
        // description: "Make sure to experience it at least once; it's definitely worth a visit."
    },
    {
        image: require('./Images/14.jpg'),
        // caption: "Caption",
        // description: "Make sure to experience it at least once; it's definitely worth a visit."
    }
]
function Events() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
                {data.map((slide, i) => {
                    return (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slide.image}
                                alt="slider image"
                            />
                            {/* <Carousel.Caption className="caption">
                                <h3>{slide.caption}</h3>
                                <p>{slide.description}</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    )
                })}

            </Carousel>
            <Card className="text-center" >
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text className="desc">
                    Make sure to experience it at least once; it's definitely worth a visit.
                    </Card.Text>
                    <Button variant="primary">Contact Now</Button>
                </Card.Body>
            </Card>
            <CardGroup>
                <Card className="cardGroup">
                    <Card.Img className="cardImg" variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>Grand Entry</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card className="cardGroup">
                    <Card.Img className="cardImg" variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>Wedding Stage</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card className="cardGroup">
                    <Card.Img className="cardImg" variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>Lunch/Dinner</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <Button className="btn" variant="primary">All Post</Button>

        </>
    );
}
export default Events;