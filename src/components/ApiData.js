import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap';
export class ApiData extends Component {
    render() {

        return (
            this.props.apiData.map((obj, idx) => {
                return (
                    <div key={idx}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={obj.photo} />
                            <Card.Body>
                                <Card.Title> {obj.name}</Card.Title>
                                <Card.Text>{obj.instructions}</Card.Text>
                                <Button variant="primary" onClick= {e => this.props.favFlower(obj)}>ADD TO FAVORITE</Button>
                            </Card.Body>
                        </Card>

                    </div>
                )

            })

        )
    }
}

export default ApiData
