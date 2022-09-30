import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const Ticket = () => {
    return (
        <Card style={{width: '18rem', background: 'black'}}>
            <Card.Img variant="top" src="holder.js/100px180"/>
            <Card.Body>
                <Card.Title>Ticket </Card.Title>
                <Card.Text>
                    <h3>Details:</h3>
                    <h3>Submitted by:</h3>
                    <h3>Date created:</h3>
                    <h3>Description:</h3>
                    <h3>Summary:</h3>
                    <h3>Squad assignee:</h3>
                </Card.Text>
                <Button variant="primary">See ticket on JIRA board https://tailscom.atlassian.net/jira/software/c/projects/IDEA/boards/53</Button>
            </Card.Body>
        </Card>
    );
}

export default Ticket
