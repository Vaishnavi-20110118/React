/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/iframe-has-title */

import './moose.css';

function moose() {
  const imageUrl = 'https://i0.wp.com/yaleclimateconnections.org/wp-content/uploads/2023/02/22323_ojibwemoose.jpg?fit=1600%2C900&ssl=1';
  return (
    <div className='head'>
        <div>
              <h1>Sarah's Favorite Animal</h1>
              <table>
                <tr>
                    <th>Home</th>
                    <th>Fun Facts</th>
                </tr>
                <tr>
                   
                    <td> <img className="img"  src={imageUrl} width= "300cm" height="150cm" alt="My Image" /></td>
                    <td>
                     <p> Her name is Sarah, and her favourite animal is the moose.<br></br>
                      They can be up to 6.5 feet tall 
            and weigh 1200 pounds.<br></br>Surprisingly, they're good at swimming!If you want to learn more about the moose, 
            check out
            <a href="https://en.wikipedia.org/wiki/Moose">its <br></br>Wikipedia page.</a></p></td>               
                </tr>
              </table>

        <h1>Moose are awesome becuase...</h1>
        
            <p>1. They can swim really well</p>
            <p>2. They can make really funny noises</p>
            <p>3. They can close their nostrils</p>
        
        <h1> If I were a moose,I would...</h1>
       
            <li>Eat lots of lettuce</li>
            <li>Carry little animals on my antlers</li>
            <li>Swim to alaska</li>
        
        <h1>Moose video...</h1>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/9MUCQwW2W7k"
          frameborder="0" allow=" autoplay;encrypted-media;" allowfullscreen>    
        </iframe>
    </div>
    </div>
  );
}

export default moose;