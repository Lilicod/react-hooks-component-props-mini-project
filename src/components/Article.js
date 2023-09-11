import React from 'react'

export default function Article({title, date, preview}) {
    const defaultdDate = date || 'January 1, 1970'
    
  return (
    <article>
        <h3>{title}</h3>
        <small>{defaultdDate}</small>
        <p>{preview}</p>
    </article>
  )
}


// export default function Article({ title, date, preview, readingTime }) {
//   const formattedDate = date || 'January 1, 1970';

//   const calculateEmojis = (minutes) => {
//     const emojis = [];
//     let remainingMinutes = Math.ceil(minutes);

//     while (remainingMinutes > 0) {
//       if (remainingMinutes >= 30) {
//         emojis.push('🍱'); // Add a bento box emoji for every 10 minutes.
//         remainingMinutes -= 30;
//       } else {
//         emojis.push('☕️'); // Add a coffee cup emoji for every 5 minutes.
//         remainingMinutes -= 5;
//       }
//     }

//     return emojis;
//   };

//   const emojis = calculateEmojis(readingTime);

//   return (
//     <article>
//       <h3>{title}</h3>
//       <small>{formattedDate}</small>
//       <p>{preview}</p>
//       <p>
//         {emojis.map((emoji, index) => (
//           <span key={index}>{emoji}</span>
//         ))}
//         {` ${readingTime} min read`}
//       </p>
//     </article>
//   );
// }
