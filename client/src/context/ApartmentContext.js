import {useState, useEffect, createContext} from 'react';

const ApartmentContext = createContext();

function ApartmentProvider({ children }) {
    const [apartments, setApartments] = useState([])

    useEffect(() => {
      fetch('/apartments')
      .then((r) => {
          if(r.ok) {
              r.json().then((apartmentsData) => setApartments(apartmentsData))
          } else {
              r.json().then((errorData) => console.log(errorData.errors))
          }
      })
    }, [])

    return <ApartmentContext.Provider value={{apartments, setApartments}}>{children}</ApartmentContext.Provider>;
}

export { ApartmentContext, ApartmentProvider };