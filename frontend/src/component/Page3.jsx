import React from 'react'
import HomePage from './HomePage'

export default function () {

   /* $(document).ready(function(){
       $("#hide").click(function(){
            $("p").hide();

        });
        $("#show").click(function(){
            $("p").show();
        });
    });
    */
  return (
    <div>
        <HomePage />
        <button id="hide" className="btn">hI</button>
        <p>When the button is clicked, this paragraph will be hidden.</p>
    </div>
  )
}
