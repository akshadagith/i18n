import React, { useState } from 'react'
import I18n from "../utils/i18n"

function Home() {
    const [lang , setLang] = useState('');
  return (
    <div>
        <h1>{I18n("welcomeMessage")}</h1>
        
        <p>{I18n("normalMessage")}</p>

        <h3>{I18n("greetingMessage")}</h3>

        <select  
        defaultValue={(e)=>{localStorage.getItem('lang')}}
        onChange={(e)=>{
            localStorage.setItem('lang', e.target.value)
            window.location.reload()
        }}

        >;
            <option value="">Select</option>
            <option value="mr">Marathi</option>
            <option value="hi">Hindi</option>
            <option value="en">English</option>
        </select>
    </div>
  )
}

export default Home