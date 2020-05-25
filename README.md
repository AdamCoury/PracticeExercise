# Practice Exercise

## Setting up the Application
1. First make sure to clone the repository locally.
2. After cloned, from the root folder, run `npm install` to install dependencies.
3. From the root folder run `npm run serve` to run the Application. VUE runs the applications locally on localhost:8080 by default.

## Project Structure
For this project it is broken down into 3 main parts. The input data, the code to handle the data, and the code to test that data. You will find all of these within the
`data`, `src`, and `tests` folders respectively.

### Data
The format for the interpretation of data is a raw JSON file named `test-data.json` The format required to have the src code interpret this data is the following: 

It is REQUIRED the JSON data begins and ends with SQUARE BRACKETS. (`[]`)
```
    [
        {
            "name": "Client Name"
            "team": [
            {
                "name": "Jeff",
                "title": "CEO",
                "reports": [
                                {
                                    "name": "Sue",
                                    "title": "CMO",
                                    "reports": [...]
                                },
                                {
                                    "name": "Ryan",
                                    "title": "CFO",
                                    "reports": [...]
                                }
                           ]
            }
      ]
```

### Source
This project is using the VUE framework, with Typescript. Within the `src` folder you'll find the `assests` directory which houses images and logos for the application. 
The `Interfaces` directory houses the interfaces used within the project. `Router` holds the index of all of our front end routes for the project. `Services` is used to load the data
from the JSON file into the code. `Styles` is used for our global app styling and theming. `Views` is the specific folder where we house the Components pulled from our Router which is viewed
during the application. These views use our components which are held in the `Components` directory. 

Vue allows the structure of the `.vue` file to have the template for HTML, the scripting which uses Typescript (variables, functions, etc.), and any local styling to that component all within 1 file. 

### Run your unit tests
Testing uses JEST, which comes as an option when creating a Vue project. To run the tests, simply run `npm run test:unit`.