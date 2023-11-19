"use client";
import ApartmentCard from "@/components/AppartmentCard";
import { Button, Col, Row, Space, Table } from "antd";
import { Apartment } from "@/interfaces/apartment";
export default function Home() {
  const dataSource: Apartment[] = [
    {
      id: "1",
      name: "Spacious Downtown Apartment",
      description: "Modern apartment in the heart of the city",
      location: "Downtown, City",
      price: 1500,
      bedrooms: 2,
      bathrooms: 1,
      size: 1000,
      amenities: ["Swimming pool", "Gym", "Parking"],
      photos: [
        "https://www.nawy.com/assets/icons/common/nawy.svg",
        "https://www.nawy.com/assets/icons/common/nawy.svg",
      ],
      available: true,
    },
    {
      id: "2",
      name: "Cozy Suburban Flat",
      description: "Quiet and cozy flat in a suburban neighborhood",
      location: "Suburb, Town",
      price: 1200,
      bedrooms: 1,
      bathrooms: 1,
      size: 800,
      amenities: ["Garden", "Pet-friendly"],
      photos: [
        "https://www.nawy.com/assets/icons/common/nawy.svg",
        "https://www.nawy.com/assets/icons/common/nawy.svg",
      ],
      available: true,
    },
  ];

  return (
    <div className="App">
      <Row>
        <Col span={24}>
          <div style={{ textAlign: "center" }}>
            <Space align="center">
              <h1>Nawy SDE Assignment</h1>
            </Space>
          </div>
        </Col>
      </Row>
      <Row>
            <Col span={8}>
              <ApartmentCard
                apartment={dataSource[0]}
              ></ApartmentCard>
            </Col>
      </Row>
    </div>
  );
}
