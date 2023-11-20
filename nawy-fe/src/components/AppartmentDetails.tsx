import React from "react";
import { Card, Row, Col, Tag, Image } from "antd";

const ApartmentDetails = (props: any) => {
  const { apartment } = props;
  const {
    name,
    description,
    location,
    price,
    bedrooms,
    bathrooms,
    size,
    amenities,
    photos,
    available,
  } = apartment;

  return (
    <Card title={name}>
      <Row gutter={[16,16]}>
        <Col sm={24} md={12} >
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Location:</strong> {location}
          </p>
          <p>
            <strong>Price:</strong> {price}
          </p>
          <p>
            <strong>Bedrooms:</strong> {bedrooms}
          </p>
          <p>
            <strong>Bathrooms:</strong> {bathrooms}
          </p>
          <p>
            <strong>Size:</strong> {size}
          </p>
          {amenities && (
            <p>
              <strong>Amenities:</strong>{" "}
              {amenities.map((amenity: any, index: number) => (
                <Tag key={index}>{amenity}</Tag>
              ))}
            </p>
          )}
          <p>
            <strong>Available:</strong> {available ? "Yes" : "No"}
          </p>
        </Col>
        <Col sm={24} md={12}>
          <p>
            <strong>Photos:</strong>
          </p>
          <Row>
            {photos && (
                photos.map((photo:any, index:number)=>{
              <Col key={name} span={12}>
                <Image src={photo} alt={`Photo ${index}`} />
              </Col>
                })
            )}
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default ApartmentDetails;
