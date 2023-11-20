"use client";
import ApartmentCard from "@/components/AppartmentCard";
import { Button, Col, Row, Space } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await axios.get("http://localhost:3000/apartments");
      if (response.status !== 200) {
        setIsError(true);
      } else {
        setData(response.data);
      }
      setIsLoading(false)
    };
    fetchData();
  }, []);

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
      {isError ? (
        <h2>Something has gone wrong</h2>
      ) : isLoading ? (
        <h2>Still loading...</h2>
      ) : data ? (
        <Row>
          {data.map((apartment) => {
            return (
              <Col span={8}>
                <ApartmentCard apartment={apartment}></ApartmentCard>
              </Col>
            );
          })}
        </Row>
      ) : (
        <h2>No data!</h2>
      )}
    </div>
  );
}
