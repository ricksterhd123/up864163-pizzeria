Key features:

- Working shopping cart/basket for pizzas.
Simply go to /menu and add items to your basket, then click on the cart icon to checkout.
- Reads menu items from models/menu.json
Add menu items and change prices in models/menu.json without having to restart the server.
- Simple layout and design, perhaps a little too simple.
No use of JQuery, minimal set of node packages used and semi-functional.

Design / implementation rationale:
My goal was to create a simple pizzeria website for pizza store owners,
which allowed users to buy online (delivery or collection), once an order has been placed
the store workers would get notified instantly. This simple design allows the workers to continue working without having to
pickup the phone and once the order has been made, through a POS system they 'could' (not implemented yet) update the order from 'in-progress' to 'finished'
which would notify the customer when to come and collect their pizza. 
I got inspiration from the dominos website and other similar POS systems from previous work experience.
The staff would've had to login to view customer contact details, items they've orders and change the settings of the unattended display, however this has not been implemented.

Pages:
/ - Index of the page
/menu - The pizza menu, allows you to add items to your basket!
/orders - The page for the unattended display, which shows placed orders (unfinished and badly designed).
/basket - The basket menu, which allows the user to continue to checkout giving contact details.

