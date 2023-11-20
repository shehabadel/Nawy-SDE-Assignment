import React from "react";
import { Card, Row, Col, Tag, Image } from "antd";

const ApartmentCard = (props: any) => {
  const { apartment } = props;
  const {
    id,
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
      <Row>
        <Col span={12}>
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
        <Col span={12}>
          <p>
            <strong>Photos:</strong>
          </p>
          <Row>
            {photos && (
              <Col key={name} span={12}>
                <Image src={photos[0]} alt={`Photo ${id}`} />
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default ApartmentCard;
