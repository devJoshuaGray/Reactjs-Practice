import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// //NOW THIS IS ALL COMPONENTS FROM THE LESSON//
// const App = props => {
//     const items = [
//         { name: "Bread", price: 2.35 },
//         { name: "Milk", price: 2.0 },
//         { name: "Eggs", price: 3.15 },
//         { name: "Tea", price: 4.0 }
//     ];
//     const stuffs = [
//         { this: "this ", thatisthat: " that", these: " these" },
//         {thatisthat: "summor of this"}
//     ];
//     return (
//         <div>
//             <Stuff stuffs={stuffs} />
//             <List items={items} />
//             <Employee name="Joshua" age="33" position="Manager"/>
//             <GroceryList item1="beans" item2="buttermilk" item3="cornbread"/>
//         </div>
//     );
// };


// const Stuff = props => {
//     const stuffitems = props.stuffs.map((item, index) => (
//         <li key={index}>
//             {item.this}
//             {item.thisisthat}
//             {item.these}
//             {item.thatisthat}
//         </li>
//     ));
//     return <ul>{stuffitems}</ul>
// };

// const List = props => {
//     const listItems = props.items.map((item, index) => (
//         <li key={index}>
//             {item.name}: {item.price}
//         </li>
//     ));
//     return <ul>{listItems}</ul>;
// };

// const Employee = props => (
//     <ul>
//         <li>{props.name}</li>
//         <li>{props.age}</li>
//         <li>{props.position}</li>
//     </ul>
// );

// const GroceryList = props => (
//     <ul>
//         <li>{props.item1}</li>
//         <li>{props.item2}</li>
//         <li>{props.item3}</li>
//     </ul>
// );

// ReactDOM.render(<App />, document.getElementById('root'));









//////////Rendering Data with the Map() Function 
//////////map() function of an array which accepts as its parameter a transformation function
//////////The transformation function applies its logic, transforming the current element as needed, and returns the transformed element as a new element — the original element is not changed.
///////// const items = ['Bread', 'Milk', 'Eggs', 'Tea'];////////
///////// const listItems = items.map(item => <li>{item}</li>);////////
//////// return (<List items={items}) />;  () are optional I found//////////


// const App = props => {
//     const items = ['Bread', 'Milk', 'Eggs', 'Tea'];
//     const Love = props => (
//         <h1>
//             So I just want to tell you {props.message}
//         </h1>
//     );
//     return(
//         <div>
//         <List items={items} />
//         <p>
//         I really love you
//         </p>
//         <Love message="I love you" />
//         </div>
//     )
// };


// //////item holds the value for each items. item was created in map
// ///////index and key are optional
// const List = props => {
//     const listItems = props.items.map((item, index) => (
//         <li key={index}>{item}</li>
//     ));
//     return <ul>{listItems}</ul>;
// };

// ReactDOM.render(<App />, document.getElementById('root'));


//Rendering Data with a for loop////WORKS BUT NOT BEST APPROACH///////////////////////////
// const App = props => {
//     return <List items={listItems} />;
// };

// const items = ['Bread', 'Milk', 'Eggs', 'Tea'];

// const listItems = [];

// for (let i = 0; i < items.length; i++) {
// listItems.push(<li key={i}>{items[i]}</li>);
// }

// const List = props => <ul>{props.items}</ul>;

// ReactDOM.render(<App/>, document.getElementById('root'));
/////////////////////////////////////////////////////////////

//Here is a full PropTypes example
// const App = props => {
//     const user = {
//       name: 'George Bailey',
//       address: '1122 Drafty House',
//       city: 'Bedford Falls',
//       state: 'New York',
//       zip: 13148
//     };
//     return <User person={user} items="Boots, Tie, Socks" amount={100} />;
//   };

//   const User = props => (
//     <ul>
//       <li>Name: {props.person.name}</li>
//       <ul>
//         <li>Address: {props.person.address}</li>
//         <li>City: {props.person.city}</li>
//         <li>State: {props.person.state}</li>
//         <li>Zip: {props.person.zip}</li>
//       </ul>
//       <li>Items: {props.items}</li>
//       <li>Paid: {String(props.paid)}</li>
//       <li>Amount: {props.amount}</li>
//       <li>Shipped: {String(props.shipped)}</li>
//     </ul>
//   );

//   User.propTypes = {
//     person: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       address: PropTypes.string.isRequired,
//       city: PropTypes.string.isRequired,
//       state: PropTypes.string.isRequired,
//       zip: PropTypes.number.isRequired,
//     }),
//     items: PropTypes.string.isRequired,
//     paid: PropTypes.bool,
//     amount: PropTypes.number.isRequired,
//     shipped: PropTypes.bool
//   };

//   User.defaultProps = {
//     paid: false,
//     shipped: false
//   };

//   ReactDOM.render(<App />, document.getElementById('root'));


// SO HERE IS A MAIN COMPONENT THAT TAKES PROPS AND RETURN ANY COMPONENT CREATED I THINK
// STANDARD FOR MAIN COMPONENT IS NAMES App
// I BELIEVE RETURN IS OPTIONAL, JUST REMOVE {} AS WELL
// const App = props => {
//     return (
//         <div>
//             <li>{doggy.name}</li>
//             <li>{doggy.state}</li>
//             <Pagetwo name="Joshua"/>
//             <Hello name="Nikki" />
//             <Hello name="Michael" />
//             <Hello name="Andrew" />
//             <Hello name="Joshua" />
//             <Hello name="Raven" />
//             <Employee name="Joshua" age={32} position="Project Lead" />
//             <Employee name="Raven" age={28} position="Rock Star" loved="YES!" />     
//         </div>
//     );
// };
// REAL WORLD THIS IS THE MOST COMMON WAY TO WRITE WITHOUT ADDITIONAL LOGIN "RETURN"
// const Hello = props => (
//     <div>
//         <h1>Hello, {props.name}!</h1>
//     </div>
// );

// const doggy = {
//     name: "Ellie May",
//     state: "Alabama"
// };

// const Pagetwo = props => (
// <p>This is Pagetwo child component {props.name}{props.whatAmI}{props.whoDoILove}</p>
// );

// Pagetwo.defaultProps = {
//     whatAmI: " is so cool",
//     whoDoILove: " I love Jesus!"
// };

// const Employee = props => (
//     <h1>
//         <li>{props.name}</li>
//         <li>{props.age}</li>
//         <li>{props.position}</li>
//         <li>{props.loved}</li>
//     </h1>
// );
// //THIS SETS PROPTYPE FOR EMPLOYEE COMPONENT
// Employee.propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number.isRequired, //isRequired makes age required when rendering list of clients
//     position: PropTypes.string,
//     loved: PropTypes.boolean
// }

// Employee.defaultProps = {
//     position: "employee", //DEFAULT VALUE OF EMPLOYEE
//     loved: "yes:)"
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('main component')
// );
// // END OF MAIN COMPONENT AND ADDITIONAL COMPONENT EXAMPLE, THIS WILL BE THE NORM I THINK, BELOW THINGS ARE LEADING UP TO THIS



// // HERE IS A BASIC FUNCTION WITH PERAMETERS THAT WE WILL TURN INTO A COMPONENT
// const differentList = (one, two, three) => {
//     return (
//         <ul>
//             <li>{one}</li>
//             <li>{two}</li>
//             <li>{three}</li>
//         </ul>
//     );
// };
// //END OF FUNCTION BEGINNING OF RENDER
// ReactDOM.render(
//     differentList("here is one", "here is two", "here is three"),
//     document.getElementById("loot")
// );
// // END OF RENDER

// //NOW WE WILL CONVERT IT TO A REACTJS COMPONENT
// const Differentlist = props => {
//     return (
//         <ul>
//             <li>{props.one}</li>
//             <li>{props.two}</li>
//             <li>{props.three}</li>
//         </ul>
//     );
// };
// //END OF FUNCTION BEGINNING OF RENDER
// ReactDOM.render(
//     <Differentlist one="here is one component" two="here is two component" three="here is three component" />,
//     document.getElementById('lootcomponent')
// );
// //END RENDER/////////////
















// ///////ALL OF THIS WAS BEGINNING PLAYING AND LEARNING/////////////////////////
// const applesPrice = React.createElement("span", {}, '--$1.00 per lb');
// const applesPic = React.createElement("img", { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Honeycrisp.jpg/330px-Honeycrisp.jpg" });
// const website = React.createElement("li", {}, React.createElement('a', { href: 'https://www.google.com' }, "www.google.com"));

// const item1 = "poopies";
// const item2 = "doopies";
// const item3 = "dooooo";
// const poodoo = (
//     <div>
//         <p>poop</p>
//         <p>{item2}</p>
//         <p>{item3}</p>
//     </div>
// );

// const list = (hi, that, theOther) => {
//     return (
//         <ul>
//             <li>{hi}</li>
//             <li>{that}</li>
//             <li>{theOther}</li>
//         </ul>
//     );
// };

// const groceryList = (
//     item1,
//     item1Price,
//     item2,
//     item2Price,
//     item3,
//     item3Price
// ) => {
//     return (
//         <ul>
//             <li>{item1}</li>
//             <ul>
//                 <li>{item1Price}</li>
//             </ul>
//             <li>{item2}</li>
//             <ul>
//                 <li>{item2Price}</li>
//             </ul>
//             <li>{item3}</li>
//             <ul>
//                 <li>{item3Price}</li>
//             </ul>
//         </ul>
//     );
// };


// ReactDOM.render(
//     groceryList(
//         'Apples',
//         '$1.00 per lb',
//         'Oranges',
//         '$.70 per lb',
//         'Mangos',
//         '$2.00 per lb'
//     ),
//     document.getElementById('foot')
// );

// ReactDOM.render(
//     React.createElement('ol',
//         {},
//         React.createElement("li", {}, "Apples"), applesPic,
//         applesPrice),
//     document.getElementById('root'));

// ReactDOM.render(<div classname="flower">
//     <div>

//     </div>
//     <h1>Hello WOrld!</h1>
//     <ol>
//         <li>Apples</li>
//         <li>Oranges</li>
//         <li>
//             <a href="https://www.google.com">Google</a>
//         </li>
//     </ol>
//     <p>{item1}</p>
//     <p>{item2}</p>
//     <p>{item3}</p>
//     <div>cool</div>
//     <div>cool</div>
//     <a>cool</a>
//     <a>cool</a>
//     <br />
//     <button>yo</button>
//     <p>{poodoo}"poodoo in p tag"</p>
//     {poodoo}"no p tag"
// </div>,
//     document.getElementById('poop'));

// ReactDOM.render(
//     list("this value", "that value", "the other value"),
//     document.getElementById('scoot'));

    //////PLAYING AND LEARNING/////////////