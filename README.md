# Kreatopia

Kreatopia is a platform for Indonesian art creators to showcase and earn money for their work.

This project was created for Garuda Hacks 2020. Devpost Submission link can be found [here](https://devpost.com/software/kreatopia/)  

## API Documentation

### USER
| #Method | #Route | #Details |
| :---: | :---: | :---: |
| POST | /user/register | Register new account |
| POST | /user/login | Log in and retrieve a JWT token |
| GET | /user/ | Retrieve an user data using token inside header |

### ITEM
| #Method | #Route | #Details |
| :---: | :---: | :---: |
| GET | /item | Get all items data |
| GET | /item/:id | Get one item data |
| POST | /item | Create a new item entry |
| PUT | /item/:id | Update an existing item |
| DELETE | /item/:id | Delete an item |

### COMIC
| #Method | #Route | #Details |
| :---: | :---: | :---: |
| GET | /comic | Get all comics data |
| GET | /comic/:id | Get one comic data |
| POST | /comic | Create a new comic |
| PUT | /comic/:id | Update comic information |
| DELETE | /comic/:id | Delete a comic |

### CHAPTER
| #Method | #Route | #Details |
| :---: | :---: | :---: |
| GET | /chapter | Get all chapters from all comics |
| GET | /chapter/one/:id | Get one comic chapter |
| GET | /chapter/:ComicId | Get all chapters of a comic |
| POST | /chapter | Post a new comic chapter |
| PUT | /chapter | Update comic chapter |
| DELETE | /chapter | Delete comic chapter |

### CART
| #Method | #Route | #Details |
| :---: | :---: | :---: |
| POST | /cart/:id | Add a new cart data |
| GET | /cart/:id | Search for one cart data |
| DELETE | /cart/:id | Remove cart |
| PUT | /cart/:id | Update cart data |
