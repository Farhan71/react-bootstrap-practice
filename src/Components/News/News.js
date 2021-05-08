import React from 'react';
import {Card, Button} from 'react-bootstrap'

const News = (props) => {
    const imgStyle ={
        width: '30%',
        height: '15%',
    }
    return (
        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{props.news.title}</Card.Title>
                <Card.Text>
                    <img src={props.news.urlToImage} style={imgStyle} alt="" />
                </Card.Text>
                <Card.Text>
                    {props.news.description}
                </Card.Text>
                <Button variant="primary">Go Somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default News;