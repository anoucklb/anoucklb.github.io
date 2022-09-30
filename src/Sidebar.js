import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from './Logo/logo.png';


const Sidebar = () => {
    // logic
    return (
        <div>
            <Card style={{width: '30rem', background: 'turquoise'}}>
                <Card.Img src={image} style={{width: '100px', align: 'center'}} variant="top" alt="logo"/>
                <Card.Body>
                    <h1>PM to Squad relationship</h1>
                    <Card.Text>
                        <h3>Milena Court -> Growth</h3>
                        <h3>Jess Salisbury-> ROC</h3>
                        <h3>Lizzie Tregear-> Shop</h3>
                        <h3>Marie Renwick-> WOF</h3>
                        <h3>Oli Osmond-> Pet</h3>
                        <h3>Christina Tang-> PLANS</h3>
                        <h3>Matt Gibbs-> Owner</h3>
                        <h3>Thom Warren-> Vet2Pet</h3>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Sidebar