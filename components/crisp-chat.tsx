"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("c26b794d-06fb-44aa-8343-a82400173eaf");
    }, []);

    return null;
}