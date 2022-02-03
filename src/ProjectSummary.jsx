import {Card, Button, Image, Spinner} from "react-bootstrap";
import React, { useState, useEffect} from "react";
import axios from "axios";

function ProjectSummary({project}){
    const [images, setImages] = useState([]);
    const [seeImages, setSeeImages] = useState(false);

    function getImages() {
    axios.get(`http://localhost:8010/api/projects/${project.id}/images`)
    .then(res => {
        console.log(res.data);
        setImages(res.data);
    })
    .catch(err => console.log(err))
    }

    useEffect(getImages, [seeImages]);

    function ButtonImages() {
        if(seeImages) {
            if(images) {
                return images.map((im, i) => <Image src={im.url} title={im.title} /> )
            } else {
                return <Spinner/>
            }
        } else {
            return <Button variant="primary" onClick={() => setSeeImages(true)}>See Images</Button>
        }
    }

    return <>
    <Card.Header>{project.name}</Card.Header>
     <Card.Body>
    <Card.Title> I made this project on: {project.date.slice(0,10)}</Card.Title>
    <Card.Text>
        this are the skills I used for this project: {project.skills}
    </Card.Text>
    {ButtonImages()}
  </Card.Body>
    </>
}

export default ProjectSummary;