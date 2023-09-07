# index.html
firstly we have created a navigation bar 
then we have list of references of pages in navigationn bar 
 then we have a div callled search bar which contaimns 3 input boxe and a button for search 
than we have div called result bar which contaims hal70% area of body 
then we have a side bar  in which we have 3 radio buttons 
then we have propert class div which contains some buttons to show the stars rating 
then we have a div called right which will have display odf data 


 
      
 # index.js
in this file we are gettting the elements from the html which is search button and right side of div where we need to show the data 
then we have a function called gethotels which sets innerHtml as empty first 
then we have try block which contains the fetch part which is used to fetch the api then we are checking the condition if response is not ok then it will set the stattus code  


 else we are storing the data into data variable 
 and for each time of data we are creating a  and making a card to display the result as fetched
then we are appending the child 
and after that if there is any error than we will catch in catch part will display the error message 
then we have a eventlistener which calls the getHotels function 
     