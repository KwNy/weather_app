
import React from 'react';
import './Visual.css';

const Visual = props => {
const {temp,err, icon,description,city} = props.weather ;

let icons_img = `http://openweathermap.org/img/wn/${icon}@2x.png`

let content = null;

if(!err && city){
    content = (
        <div> 
            <img src={icons_img} alt={description} />
        </div>
    )

}

// else if (err) {
//     content = (
//         <div> 
//         </div>
//     )

// }



return (
        <div className="Visual">
            {err ? '' 
            :content}
        </div>


  );
}

export default Visual;
