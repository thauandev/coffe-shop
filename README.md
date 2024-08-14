# Coffee Shop Cart

This project was developed as a challenge to practice creating and managing a shopping cart using `useReducer` and `useContext` in React. The main objective is to simulate the experience of adding, removing, and updating items in a shopping cart for a fictional coffee shop.

## Features

- **Product Listing:** Display a list of coffees available for purchase.
- **Add Items to Cart:** Allows users to add a specific quantity of a coffee to the cart.
- **Increase or Decrease Item Quantity:** Users can increase or decrease the quantity of each item directly in the cart.
- **Address Form:** A form where users can fill in their delivery address details.
- **Total Items in Header:** The header of the application displays the total number of items in the cart.
- **Cart Total Value:** The total value of the items in the cart is automatically calculated by multiplying the quantity of each item by its unit price.

## Concepts Practiced

By developing this application, you will revisit the following important React concepts:

- **State Management:** Managing state with `useState` and `useReducer`.
- **ContextAPI:** Sharing states between components using `useContext`.
- **LocalStorage:** Persisting cart data to keep items saved even after reloading the page.
- **State Immutability:** Ensuring that the state is not mutated directly but always replaced with a new version.
- **Lists and Keys in ReactJS:** Efficiently rendering lists of products and items in the cart.
- **Props:** Passing data between components through props.
- **Componentization:** Dividing the interface into reusable components.

## How to Start the Project

To start the project, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Install the necessary dependencies with the command:

   ```bash
   npm install
   ```

4. Run the development server with the command:

   ```bash
   npm run dev
   ```
   