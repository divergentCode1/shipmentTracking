
ShipmentTrackingStatus:Component and Class Implementation

Apex Class: ShipmentTrackingCallout
LWC: ShipmentTracking

LWC:
I have implemented an LWC that includes an input field and a button labeled "Track." When the button is clicked, the LWC calls the designated service. If the input field is left empty, the expected response should be "Error - Must provide tracking number." However, I have observed that even with a null value, the service consistently returns the 'Shipped- On Time' status. I have verified the debugs and encourage you to test it by accessing the following URL in your browser: 
[https://merzcommunities--mel.sandbox.my.salesforce-sites.com/services/apexrest/mockShipmentStatus?trackingNumber=]

Apex Class:
In the Apex class, I have defined a method called getShipmentTrackingStatus that takes a parameter named 'trackingNumber.' In this method, I validate the parameter value, converting it to null if empty, aligning with the single condition defined in your web service. I have also implemented best practices, such as employing a try/catch block to handle any exceptions. The method calls the web service and returns the response to the LWC. If the service call is successful and there is a response, it is displayed on a toast message within the component.

These updates have been pushed to the GitHub repository for your review.
