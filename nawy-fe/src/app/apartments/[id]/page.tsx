"use client"
import { useEffect, useState } from "react"
import axios from "axios";
import ApartmentDetails from "@/components/AppartmentDetails";
import { Apartment } from "@/interfaces/apartment";
export default function Page({ params }: { params: { id: string } }) {
  const [apartment, setApartment] = useState<Apartment>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError]= useState(false)
  useEffect(()=>{
    const fetchData = async () => {
      setIsLoading(true)
      const response = await axios.get(`http://localhost:3000/apartments/${params.id}`);
      if (response.status !== 200) {
        setIsError(true);
      } else {
        setApartment(response.data);
      }
      setIsLoading(false)
    };
    fetchData();
  },[params.id])
  return(
    <div>
      {
        isLoading ? <h2>Still loading..</h2>:
        isError ? <h2>Something has went wrong!</h2>:
        apartment? <ApartmentDetails apartment={apartment}></ApartmentDetails>:
        <h2>No data!</h2>
      }
    </div>
  ) 
    
}