import React from "react";

import { Col, Image } from "react-bootstrap";

function ProfilePhoto() {
    return (
        <>
            <Col xs={6} md={4} className="photo">
                <Image src="images1.png" roundedCircle />
            </Col>
        </>
    );
}
export default ProfilePhoto;
