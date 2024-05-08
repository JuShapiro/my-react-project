export const Product = ({ name, imgUrl, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="480" />
      <p>Price: {price} credits</p>
    </div>
  );
};

export default Product;

// const Mailbox = ({ name, unreadMessages }) => {
//   return (
//     <div>
//       <p>Hello {name}</p>
//       <p> {unreadMessages.length > 0
//         ? 'You {unreadMessages.length} unread messages'
//         : "No unread messages"}
//       </p>

//     </div>
//   )
// }

// export default Mailbox;
