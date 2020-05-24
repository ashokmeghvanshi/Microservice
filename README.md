● Microservice
● A Simple Microservice In Node.js
● This Project having two major functionalities

● Authentication
● Image Thumbnail Generation

● Public Endpoint :
  This contain LOGIN route with an username and password for authentication 
  
  This will accept any username and password and  after login it will direct to a JSON Web Token(JWT,https://jwt.io/)
  that will use to validate future requests.

● Protected Endpoint :
  The JSON Web Token obtained in the "LOGIN" Pubic endpoint that is attached to each request.
  
  This will reject the request if username and password is incorrect. And it will also reject the request when JWT is missing or invalid.
   
  This will Create a Thumbnail request for user. That Thumbnail contain a public image URL. 
  User can Download the image and resize it 50x50 pixels, and give in result resulting thumbnail.
  
● Error for Invalid User and Page Not Found :
  In Images folder there are two images
  
  ● Invalid User : If there is an Invalid User than uu.png will open.
  
  ● Error Page Not Found : If any User click on any page that is not avaliable than epnf.jpg will open.
  


