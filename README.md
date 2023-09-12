# React Router Exercise: Building a Product Management System

## Section 1: Configuring the App.jsx Component

**Objective**: The goal of this section is to guide you through the process of building the primary `App` component for the web application. This component will establish the necessary routing system to navigate through the various parts of the application.

### Instructions:

1. **Defining the Routing System**:
    - Begin by defining the `routes` array. This array will store objects that dictate how navigation within your application operates.
    - Each route object should define a `path` that represents a URL segment and an `element` which specifies what component should be rendered when that path is accessed.
    - You can nest routes by including a `children` property in a route object. Nested routes are useful when a part of your application has a shared layout across multiple sub-pages.

2. **Setting up the Base Route**:
    - Create the first object in the `routes` array. This object should represent the root path, `'/'`.
    - For this route, use the `SharedLayout` component as the `element`. Pass the `user` data to it as a prop.
    - As this route has several child routes (like Home, AddProduct, etc.), you will need to set up a `children` property that is an array of these child route objects.

3. **Configuring Child Routes**:
    - Set up the `index` route that represents the default child of the root path. This route should render the `Home` component and have access to the `products` data.
    - Create another child route for adding a product. This path should be 'add' and it should use the `ProtectedRoute` component wrapping the `AddProduct` component. Pass the `user` prop to `ProtectedRoute`.
    - Next, configure a nested route for products. Its path should be 'products' and it should further have child routes for specific product details and editing a product. Use the dynamic `:productId` in the path to cater for any product ID.
        - For viewing a specific product, render the `Product` component with access to the `products` data.
        - For editing a product, use the `ProtectedRoute` wrapping the `EditProduct` component. Again, ensure the `ProtectedRoute` receives the `user` prop.
    
4. **Handling Undefined Routes**:
    - To ensure user-friendly behavior, set up routes to handle undefined or erroneous paths:
        - Add a route with the path 'not-found' that renders the `NotFound` component.
        - As a catch-all for any other undefined paths, add a route with the path `'*'` and have it render the `NotFound` component.

5. **Implementing the Router**:
    - Now that your `routes` array is defined, create a browser router using the `createBrowserRouter` function and passing the `routes` array to it.
    - Wrap your entire app component inside the `RouterProvider` component. This provider requires a `router` prop which should receive the browser router you just created.
    - Within the `RouterProvider`, include a `div` with the class `container`. This div will later be the container for all your routed components.

### Hints:
- The `ProtectedRoute` component is specially designed to restrict access to certain routes based on user authentication. It's essential to wrap components like `AddProduct` and `EditProduct` in this component to prevent unauthorized access.
- Using dynamic segments like `:productId` in your paths enables React Router to extract parameters from the URL, which can be later used to fetch specific data or perform certain actions.


## Section 2: Building the SharedLayout Component

**Objective**: The purpose of this section is to walk you through the process of building the `SharedLayout` component. This component acts as a wrapper for other components, providing consistent structural elements like the header, navigation, and footer across multiple pages.

### Instructions:

1. **Setting up the Structure**:
    - Within the `container` div, you're going to layout the main structural blocks: the header, navigation, main content area, and footer. 

2. **Constructing the Header**:
    - Start by adding a `header` element.
    - Within the header, place an `h1` element welcoming users to the web application.
    - On the right side of the header, you'll need a section to greet the logged-in user. Create a `div` with the class `header-right`.
    - Inside this div, use a `span` to display a message, "Hello, [username]". You'll be fetching the username from the `user` prop.

3. **Building the Navigation**:
    - Now, set up the navigation using the `nav` element.
    - Within the navigation, design an unordered list (`ul`) with the class `nav-links` to hold the navigation links.
    - For the homepage link, create a list item (`li`) and use the `Link` component from `react-router-dom` to direct users to the root path (`/`).
    - Check if the `user` prop exists to determine if a user is logged in. If so, show an option to add a product. Again, employ a list item and the `Link` component, setting the path to `/add`.
    - Lastly, have a link for Products, which can also utilize the root path (`/`).

4. **Adding the Main Content Area**:
    - After the navigation, set up the `main` section. 
    - This area is where content from child routes will render. Therefore, use the `Outlet` component from `react-router-dom` within the `main` section. The `Outlet` acts as a placeholder, showing the appropriate component based on the current route.

5. **Footer Setup**:
    - As a finishing touch, introduce a `footer` element at the bottom of your layout.
    - Within the footer, add a `p` tag to give a copyright statement, such as "All Rights Reserved".


## Section 3: Creating the ProtectedRoute Component

**Objective**: This section will guide you through creating a `ProtectedRoute` component, which ensures that certain routes are only accessible to authenticated users. You'll be utilizing the `useNavigate` hook from `react-router-dom` for navigation within this component.

### Instructions:

1. **Setting up the Component**:
    - Begin by importing the necessary dependencies. In this case, we need the `useNavigate` hook from `react-router-dom`.
    - Create a functional component called `ProtectedRoute`. It should receive two props: `children` (the components to be rendered) and `user` (to check if a user is authenticated).

2. **Using the `useNavigate` Hook**:
    - Inside the `ProtectedRoute` component, initialize a variable called `navigate` using the `useNavigate` hook. This hook provides a function for programmatic navigation.

3. **Checking Authentication**:
    - In the component, implement a conditional check to determine if the `user` is authenticated. You can do this by checking if `user` exists.
    - If the user is not authenticated (i.e., `!user`), you want to redirect them to an appropriate page. In this example, it assumes a route `'/'` as the redirect destination. You can adjust this route according to your application's login or authentication page.

4. **Redirecting Unauthenticated Users**:
    - To redirect users when they are not authenticated, use the `navigate` function with the appropriate route (e.g., `navigate('/')`). This will take them to the designated destination route.

5. **Rendering Child Components for Authenticated Users**:
    - If the user is authenticated, you want to render the child components. Return `children` within curly braces `{children}`. This allows the children components passed to `ProtectedRoute` to be rendered when the user is authenticated.

## Section 4: Building the `Product` Component

**Objective**: In this section, we'll develop a `Product` component that will display detailed information about a product based on its ID from the URL. We'll make use of the `Link` and `useParams` hooks from `react-router-dom` to achieve this.

### Instructions:

1. **Setting up the Component**:
    - Start by importing the necessary dependencies. For this component, we require both `Link` and `useParams` from `react-router-dom`.
    - Create a functional component named `Product` that takes in one prop: `products`. This prop will represent an array of available products.

2. **Extracting Product ID from the URL**:
    - Within the `Product` component, initialize a constant named `productId` by destructuring it from the `useParams()` hook. This hook extracts parameters from the current route, and in our case, we're interested in the product's ID.

3. **Identifying the Relevant Product**:
    - With the `productId` at hand, our next step is to identify the corresponding product from the `products` prop.
    - Declare a constant called `product` and set it to the result of the `find` method on the `products` array.
    - The `find` method's callback should compare the `id` of each product to the `productId`. Remember to convert `productId` to an integer using `parseInt` since parameters fetched using `useParams` are strings by default.

4. **Handling Product Absence**:
    - Considering that the product may not always exist (e.g., if an incorrect ID is manually input into the URL), we need to handle such scenarios gracefully.
    - Implement a conditional check: If the `product` constant is undefined, return a `div` element with the text "Product not found!".

5. **Facilitating Product Edits**:
    - Equip users with the capability to modify the product details.
    - Implement the `Link` component from `react-router-dom` to navigate to the product's edit page.
    - Set the `to` prop of the `Link` component to a dynamic value: `/products/${productId}/edit`.
    - Give the `edit-link` class to this link for styling and label the link "Edit Product".


## Section 5: Building the `AddProduct` Component with Navigation

**Objective**: The purpose of this section is to guide you through enhancing the `AddProduct` component by adding navigation capabilities. This ensures that after a product is added, the user is navigated back to the home page or another appropriate page.

### Instructions:

1. **Setting Up Navigation**:
    - Invoke the `useNavigate` hook and assign the returned function to a constant named `navigate`. This function will be used to programmatically navigate the user.

2. **Constructing the `handleSubmit` Function with Navigation**:   
    - After logging the product and resetting the state, employ the `navigate` function with `'/'` as its argument. This action will redirect the user to the home page after they've added a product.


## Section 6: Enhancing the `EditProduct` Component with React Router

**Objective**: The purpose of this section is to enhance the `EditProduct` component by integrating functionalities associated with React Router. By the end, you'll have a component that fetches the product to edit based on the ID from the URL and navigates back to the home page after the editing is done.

### Instructions:

1. **Retrieving the Product ID from the URL**:
    - Using the `useParams` hook from `react-router-dom`, extract the `productId` parameter from the current URL. 
    

2. **Setting Up Programmatic Navigation**:
    - Invoke the `useNavigate` hook from `react-router-dom` and assign the returned function to a constant named `navigate`. This function will allow you to programmatically redirect users after the product edits have been saved.

3. **Fetching the Product Data Based on URL Parameter**:
    - With the `productId` extracted in step 1, search for the corresponding product within the `products` mock data. Ensure you parse the `productId` to an integer for accurate comparison.

4. **Initializing the Form Data with the Fetched Product's Information**:
    - Set the initial state of the `formData` using the `useState` hook. Populate it with the properties of the found product (i.e., `name`, `description`, `price`, and `stock`).
    ```javascript
    const [formData, setFormData] = useState({
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
    });
    ```

5. **Enhancing the `handleSubmit` Function with Navigation**:
    - After handling the form's submit action (like saving edits), employ the `navigate` function with `'/'` as its argument. This step will ensure the user gets redirected to the home page after the edits have been submitted.
    ```javascript
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/`);
    };
    ```