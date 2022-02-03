import {Card, Button} from "react-bootstrap";


function DetailedProjects({info}){

console.log(info);




return (
    <div>
    <h5 style={{textAlign:'center', marginTop:'15vh'}}>Here is a list of my projects</h5>
    <Card style={{width: '20rem', margin: '0 auto'}} className="text-center">
    
    {info.map((el,i) => (
        <>
    <Card.Header>{el.name}</Card.Header>
     <Card.Body>
    <Card.Title> I made this project on: {el.date.slice(0,10)}</Card.Title>
    <Card.Text>
        this are the skills I used for this project: {el.skills}
    </Card.Text>
    <Button variant="primary">See this project's images and details</Button>
  </Card.Body>
    </>
    ))}
  
 
  <Card.Footer className="stay tuned for more projects"></Card.Footer>
</Card>

    </div>
)





};

export default DetailedProjects;