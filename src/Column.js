import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Column = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h3> New </h3>
                        <MyCard title="Ticket"/>
                        <MyCard title="Ticket"/>
                        <MyCard title="Ticket"/>
                    </Col>
                    <Col>
                        <h3> Triage </h3>
                        <MyCard title="Ticket"/>
                        <MyCard title="Ticket"/>
                    </Col>
                    <Col>
                        <h3> Explore </h3>
                        <MyCard title="Ticket"/>
                        <MyCard title="Ticket"/>
                    </Col>
                    <Col>
                        <h3> Planned </h3>
                        <MyCard title="Ticket"/>
                        <MyCard title="Ticket"/>
                    </Col>
                    <Col>
                        <h3> In Progress </h3>
                        <MyCard title="Ticket"/>
                        <MyCard title="Ticket"/>
                    </Col>
                    <Col>
                        <h3> Done </h3>
                        <MyCard title="Ticket"/>
                        <MyCard title="Ticket"/>
                    </Col>
                    <Col>
                        <h3> Not doing </h3>
                        <MyCard title="Ticket"/>
                        <MyCard title="Ticket"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const MyCard = (props) => {
    const onClick = () => {
        alert("ADDED")
    }
    return (
        <Card style={{background: 'teal', padding: '10px', margin: '10px', color: 'white'}}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    <h6>Details: Make the website faster</h6>
                    <h6>Submitted by:</h6>
                    <h6>Date created:</h6>
                    <h6>Description</h6>
                    <h6>Details:</h6>
                </Card.Text>
                <Button variant="secondary" onClick={onClick}>Jira ticket</Button>
            </Card.Body>
        </Card>
    )
}

export default Column