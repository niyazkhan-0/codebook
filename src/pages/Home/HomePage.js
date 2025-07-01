import React from 'react'
import {Hero} from "./components/Hero"
import {FeaturedProduct} from "./components/FeaturedProduct"
import { Testimonial } from './components/Testimonial'
import {Faq} from './components/Faq'
import { useTitle } from '../../hooks/useTitle'

export const HomePage = () => {
  useTitle("Access letest E-books")
  return (
    <main>
        <Hero/>
        <FeaturedProduct/>
        <Testimonial/>
        <Faq/>

    </main>
  )
}
