import { useEffect, useState } from "react";
import { countries } from "../data/countries";

export function useDetectCountry() {
  const [loading, setLoading] = useState(true);

  const [detectedCountry, setDetectedCountry] = useState("");

  useEffect(() => {
  const detectCountry = async () => {

    try{
        const res = await fetch("https://api.country.is/");

        const data = await res.json();

        const foundCountry = countries.find(
            (c) => c.code === data.country
        )

        if (foundCountry){
            setDetectedCountry(foundCountry.name);
        }
    } catch (err){
        console.group(err)
    }finally {
        setLoading(false)
    }
  };
  detectCountry();
},
[]);

return{
    loading,
    detectedCountry,
  }

}

