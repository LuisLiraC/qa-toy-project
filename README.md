# QA Toy Project 

Build an application where I can add, edit and delete characters of videogames. Also, I want to see details like name, gender, race, a short description about the character and an image of each of them.

---

## Requirements
1. User are able to add new characters
2. User are able to update characters
3. User are able to delete characters
4. User are able to see details of each character
5. User are able to see all the characters in a grid

---

## Descriptions
1. Using a form user can add new character filling the blanks of character's information that will contain fields for name, race, gender, description and image. When user submit the form the following should happen:
    - On Success: user must be redirected to details page of the new character.
    - On Error: the page will not change and will show a message error abover the form.
2. Using a form user can edit character's information like name, race, image, description and gender.When user submit the form the following should happen:
    - On Success: user must be redirected to details page of the new character.
    - On Error: the page will not change and will show a message error abover the form.
3. In a section user are able to see all the information about the character selected. In this section it will show the image with the data. Also, this section must contain a button to back.
4. In the main page user are able to see all the characters in a grid where each character will show in a card with their image and two buttons, "Details" and "Edit". Also, above the grid this page must contain the button to add new characters.
5. In the edit page user are able to delete a character. Also, this section must contain a button to back. When user press this button, the app must show a modal with the following options:
    - Yes: if the user select this option the following should happen:
        - On Success: user will be returned to main page.
        - On Error: the page will not change and will show a message error above the form.
    - Cancel: modal will be closed.

---

## Use cases
- As user I want to add new characters.
- As user I want to update each characters.
- As user I want to add an image for each character.
- As user I want to delete characters.
- As user I want to see all the details of each character.
- As user I want to see all the chraracters in the main page.

## Out of scope
- As user I want to delete characters.
- As user I want to create my own account.
- As user I want to add videogames that appears each character.
- As user I want to select multiple characters and then delete them.
- As user I want to have buttons to move to next or past character in the details page.

---

## What does the user want to see?

Add character:
- How many characters does name field accept?
    - Min: 2
    - Max 30
- How many characters does description field accept?
    - Min: 50
    - Max 1000
- What image formats are allowed?
    - PNG
    - JPG
    - JPEG
- What is the maximum image size
    - 5 Mb
- Can be empty some value?
    - No
- What must be show when user submit form?
    - Modal with saving message

Edit character:
- How many characters does name field accept?
    - Min: 2
    - Max 30
- How many characters does description field accept?
    - Min: 50
    - Max 1000
- What image formats are allowed?
    - PNG
    - JPG
    - JPEG
- What is the maximum image size?
    - 5 Mb
- Can be empty some value?
    - No
- What must be show when user submit form?
    - Modal with saving message

---

## Testing plan

Add character:
- New character was correctly saved in database
- New character has a missing or empty field
- New character has a field that exceed the allowed length
- New character has a race or gender that is not in the defined list
- New character has a valid image type
- New character image has saved correctly in CDN (imgur)
- New character image direct link has saved correctly in database
- New character is show in main page
- New character's information is show in details page
- After pressing save button app is redirected to details page
- After pressing save button modal with saving message must be showed
- If saving fails modal must be closed
- After pressing back button the app must be redirected to the main page

Edit character:
- Edited character was correctly saved in database
- Edited character has a missing or empty field
- Edited character has a field that exceed the allowed length
- Edited character has a race or gender that is not in the defined list
- Edited character has a valid image type
- Edited character image has saved correctly in CDN (imgur)
- Edited character image direct link has saved correctly in database
- Edited character info is show in main page
- Edited character's new information is show in details
- After pressing save button app is redirected to details page
- After pressing save button modal with saving message must be showed
- If saving fails modal must be closed
- After pressing back button the app must be redirected to the main page

Delete character:
- Modal shows correctly after press delete character
    - After pressing the cancel option, the modal closes
    - After pressing the cancel option and request succeeded app is redirected to main page
    - After pressing the cancel option and request failed the modal closes and error message is displayed
- Delete request has a valid character ID
- Character was deleted successfully
- Character does not show in main page after it was deleted
- After pressing back button the app must be redirected to the main page

Main page:
- Information of each character is displayed correctly
- Image of each character is displayed correctly

Details page:
- Information of each character is displayed correctly
- Image of each character is displayed correctly
- After pressing back button the app must be redirected to the main page

---

## Wireframes

Home
![](https://i.imgur.com/lEVvNmF.png)

Details
![](https://i.imgur.com/GJa0owq.png)

Add character
![](https://i.imgur.com/61q5XWn.png)

Add character saving
![](https://i.imgur.com/Sj3TaMn.png)

Add character showing error
![](https://i.imgur.com/2qzOfoq.png)

Edit character
![](https://i.imgur.com/hc1XM0f.png)

Edit character showing modal
![](https://i.imgur.com/mmFE4z7.png)

Edit character saving
![](https://i.imgur.com/6dkJaPi.png)

Edit character showing error
![](https://i.imgur.com/ejrJxy5.png)