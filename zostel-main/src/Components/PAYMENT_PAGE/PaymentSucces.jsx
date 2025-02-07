import React, { useState, useEffect } from 'react'
import { Image, Text, Box } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/system';
import { useNavigate } from 'react-router';
import PreLoader from '../PreLoader';

export default function PaymentSucces() {
    function generateRandomId() {
        // Generate a random 6-digit number between 100000 and 999999
        const randomId = Math.floor(Math.random() * 900000) + 100000;

        return randomId.toString();
    }

    const [loading, setLoading] = useState(false)
    const { colormode, togglecolormode } = useColorMode();


    // useEffect(() => {
    //     setLoading(true)
    //     window.addEventListener('load', () => {
    //         setLoading(false);
    //     });
    // }, [])

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    let navigate = useNavigate();

    setTimeout(() => {
        navigate('/profile')
    }, 5000);

    const ID = generateRandomId();
    return (
        <>{loading ? <PreLoader /> : <div style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "url(https://img.cdn.zostel.com/zostel/gallery/images/v9_1z377RrelrK0mDPiFyQ/zostel-homes-ramgarh-exterior-20220425022507.jpg?w=1280)",
            backgroundSize: "cover",
            position: "absolute",
            top: "0",
            left: "0",
        }}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                bg={colormode == "light" ? "gray.800" : "white"}
                color={colormode == "light" ? "white" : "gray.800"}
                p={20}
                borderRadius={30}
            >
                <Image src='https://media.tenor.com/40bYuytgRvYAAAAj/hedge-pay-hpay.gif' width='200px' />
                <Text fontWeight='600' fontSize='2rem'>Your Room is Booked !</Text>
                <Text fontWeight='600' fontSize='2rem'>Booking ID : #{ID}</Text>
            </Box>
        </div>}</>
    )
}
