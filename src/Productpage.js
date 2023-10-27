import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useParams } from 'react-router-dom';
export default function Productpage(){
    const { id } = useParams();
    return (
        <>
            <div>
      <h2>Item ID: {id}</h2>
      {/* Other content related to the item */}
    </div>
        </>
    )
}