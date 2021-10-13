const Card = (card) => {
  return `
    <li>
      <img src = ${card.avatar_url} />
      <a href= "${card.html_url}" >
      <h3>${card.name}</h3>
      </a>
      <p>Public Repos : <strong>${card.public_repos}</strong></p>
      <p>Bio : ${card.bio ? `Bio: ${card.bio}` : "No content"}</p>
    </li>`;
}
// Alternate
// const Card = ({avatar_url, html_url, name, public_repos, bio  }) => {
//   return `
//     <li>
//       <img src = ${avatar_url} />
//       <a href= "${html_url}" >
//       <h3>${name}</h3>
//       </a>
//       <p>Public Repos : <strong>${public_repos}</strong></p>
//       <p>Bio : ${bio ? `Bio: ${bio}` : "No content"}</p>
//     </li>`;
// }

export default Card;