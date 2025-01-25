"use client";

import React from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Image from "next/image";



function page() {
  return (
    <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 dark:text-white"
      >
        Rate Card According to the Project Types and Complexity
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
      >
        Pricing is based on the complexity of the project. We offer a variety of pricing options to suit your project needs.
      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
        <div>
            <h1 className='text-2xl text-center font-bold mb-3'>Services Offered</h1>
            <div>
                <h2 className='text-xl font-bold mb-2'>Web Development</h2>
                <p>Static Website, Dynamic Website, E-commerce Website, Portfolio Website, Blog Website, Custom Website, CMS Website, etc.</p>

                <h2 className='text-xl font-bold mb-2 mt-4'>Mobile App Development</h2>
                <p>Android App, iOS App, Hybrid App, Native App, etc.</p>

                <h2 className='text-xl font-bold mb-2 mt-4'>API Development & Integration</h2>
                <p>RESTful and GraphQL APIs, Third-party integrations</p>

                <h2 className='text-xl font-bold mb-2 mt-4'>Web Scraping</h2>
                <p>Scraping data from websites</p>
            </div>
            <div>
                <h1 className='text-2xl text-center font-bold mt-6 mb-3'>Pricing</h1>
                <div>
                    <h2 className='text-xl font-bold mb-2'>Basic</h2>
                    <p>Static Website, Portfolio Website, Blog Website, etc.</p>
                    <p>Starting from AED 1,500 to AED 2,500</p>

                    <h2 className='text-xl font-bold mb-2 mt-4'>Standard</h2>
                    <p>Business Website, E-commerce Website, Custom Website, CMS Website, etc.</p>
                    <p>Starting from AED 11,000 to AED 20,000</p>

                    <p className='text-xl mt-5'>CRMs , ERPs , HRMS etc.</p>
                    <p>Starting from AED 20,000</p>


                    <h2 className='text-xl font-bold mb-2 mt-4'>Premium</h2>
                    <p>Mobile App, API Development, Web Scraping, etc.</p>
                    <p>Contact us for more details</p>
                </div>
            </div>
        </div>
      </CardItem>
      <div className="flex justify-between items-center mt-20">
        <CardItem
          translateZ={20}
          as={Link}
          href="https://twitter.com/mannupaaji"
          target="__blank"
          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
        >
          See Testimonials →
        </CardItem>
        <CardItem
          translateZ={20}
          as={Link}
          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          href="tel:+971 55 8727 434"
        >
          Contact Now
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
  )
}

export default page