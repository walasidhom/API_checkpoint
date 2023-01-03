import { Modal , Table} from "react-bootstrap";
import { useState } from "react";


// user destructuring
const Card = ({ user: { name, username, email, address: { street, suite, city, zipcode, geo: { lat, lng } }, phone, website,company}, key }) => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
      <>
        <div className="col-md-4 animated fadeIn" key={key} onClick={handleShow}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                      className="card-img-top"
                          alt=""
                          
                    />
                  </div>
                  <h5 className="card-title">
                      {name}
                      <br></br>
                      {username}
                  </h5>
                  <p className="card-text">
                    {city}
                    <br />
                    <span className="phone">{phone}</span>
                  </p>
                </div>
              </div>
        </div>
        <Modal size="lg" show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                  <Modal.Title>{ name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Email : {email}</p>
                    <p>Address :</p>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Street</th>
                                <th>Suite</th>
                                <th>City</th>
                                <th>Zipcode</th>
                                <th>Geo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{street}</td>
                                <td>{suite}</td>
                                <td>{city}</td>
                                <td>{zipcode}</td>
                                <td>
                                    lat:{lat}
                                    <br></br>
                                    lng:{lng}
                                    </td>
                            </tr>
                            
                        </tbody>
                    </Table>
                    <p>Phone : {phone}</p>
                  <p>Website : {website}</p>
                  <p>Company :</p>
                  <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>catchPhrase</th>
                                <th>bs</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{company.name}</td>
                                <td>{company.catchPhrase}</td>
                                <td>{company.bs}</td>
                            </tr>
                            
                        </tbody>
                    </Table>
                    
                </Modal.Body>
        </Modal>
    </>
            
            
        
        
      
  );
}

export default Card;