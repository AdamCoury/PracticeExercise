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

### Run your unit tests
Testing was done using JEST, which comes as an option when creating a Vue project. To run the tests, simply run `npm run test:unit`.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
