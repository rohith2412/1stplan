"use client";

import convertToSubscurrency from "../utils/convertToSubscurrency";
import { useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";


const CheckoutPage = ( amount ) => {
    const strip = useStripe;
    const elements = useElements
    const [errorMessage, setErrorMessage] = useState;
    const [clientSecret, setClientSecret] = useState;
    const [loading, setLoading] = useState(false);
}

export default CheckoutPage();