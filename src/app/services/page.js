"use client"
import React from 'react';
import ServiceHero from '@/components/Services/ServiceHero';
import ServiceHeader from '@/components/Services/ServiceHeader';
import ServiceMain from '@/components/Services/ServiceMain';




const Page = () => {
    return (
        <>
        <ServiceHeader/>
        <ServiceHero/>
        <ServiceMain/>
        </>
        
    );
}

export default Page;
