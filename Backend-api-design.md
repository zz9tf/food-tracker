# Backend API Document

## Pages

1. Login/Sign in page for users to login or sign in their account.
2. List page which is used to organized users’ checklist to help them shopping the food they need, and it has functions: Add food directly; Add food based on receipts; Add food based on meal plan
3. Meal plan page is used to organize a meal plan plan for one week, it will contain three receipts each day, and list 7 days receipts. It will also show nutrition you have for the week and days. It has functions: remove, modify/add, 
4. nutrition track membership for them to view the nutrition recording for month/week/day.
5. Account page for users to organize their account.
6. Receipts recommended page will recommend receipts for users, it will list some receipts, and also users can search recipes by key words.
7. Food pop-ups, which is for descripting food for me to add to the pantry or for buying. It should have a name, amount, expiration, nutrition(if needed) etc.

## Functions 
1. User Authentication
    - API endpoint for user registration (sign-up)
    - API endpoint for user login

2. List Page
    - API endpoint for retrieving the user's checklist
    - API endpoint for adding food directly to the checklist
    - API endpoint for adding food based on receipts to the checklist
    - API endpoint for adding food based on meal plans to the checklist

3. Meal Plan Page
    - API endpoint for retrieving the user's meal plan for a specific week
    - API endpoint for adding receipts for a specific day
    - API endpoint for modifying receipts for a specific day
    - API endpoint for removing receipts for a specific day

4. Nutrition Tracking
    - API endpoint for retrieving nutrition recordings for a month/week/day

5. Account Management
    - API endpoint for retrieving user account information
    - API endpoint for updating user account information
    - API endpoint for deleting a user account

6. Receipts Recommended Page
    - API endpoint for retrieving recommended receipts
    - API endpoint for searching receipts by keywords

7. Food Pop-ups
    - API endpoint for adding a new food item to the pantry or shopping list
    - API endpoint for retrieving food item details (name, amount, expiration, nutrition)

## Schema
<table>
  <tr>
    <th>Schema</th>
    <th>Attribution</th>
  </tr>
  <tr>
    <td>
      User Schema
    </td>
    <td>
      <ul>
        <li> id (unique identifier) </li>
        <li> username </li>
        <li> email </li>
        <li> phone number </li>
        <li> password (hashed) </li>
        <li> membership status </li>
        <li> createdAt </li>
        <li> updatedAt </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      Checklist Item Schema
    </td>
    <td>
      <ul>
        <li> id (unique identifier) </li>
        <li> userId (foreign key referencing the User Schema) </li>
        <li> name (hashed) </li>
        <li> quantity </li>
        <li> Expire time </li>
        <li> createdAt </li>
        <li> updatedAt </li>
      </ul>
     </td>
  </tr>
  <tr>
     <td>
      Receipt Schema
    </td>
    <td>
      <ul>
        <li> id (unique identifier) </li>
        <li> name </li>
        <li> ingredients (array of ingredient objects) </li>
        <li> instructions </li>
        <li> createdAt </li>
        <li> updatedAt </li>
      </ul>
     </td>
  </tr>
  <tr>
     <td>
      Meal Schema
    </td>
    <td>
      <ul>
        <li> id (unique identifier) </li>
        <li> userId (foreign key referencing the User Schema) </li>
        <li> ReceiptId </li>
        <li> eatAt </li>
        <li> createdAt </li>
        <li> updatedAt </li>
      </ul>
     </td>
  </tr>
  <tr>
     <td>
      Nutrition Record Schema
    </td>
    <td>
      <ul>
        <li> id (unique identifier) </li>
        <li> userId (foreign key referencing the User Schema) </li>
        <li> date </li>
        <li> calories </li>
        <li> protein </li>
        <li> carbohydrates </li>
        <li> fats </li>
        <li> createdAt </li>
        <li> updatedAt </li>
      </ul>
     </td>
  </tr>
</table>




