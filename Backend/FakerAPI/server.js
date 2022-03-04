const express = require("express");
const faker= require("faker");
const app = express();


app.get("/api/users/new", (request,response)=> {
    const createUser = () => {
        const newUser = {
        _id:faker.datatype.number(),
        firstName:faker.name.firstName(),
        lastName:faker.name.lastName(),
        phoneNumber:faker.phone.phoneNumber(),
        email:faker.internet.email(),
        password:faker.internet.password()
        };
        return newUser;        
    }
response.json({
    user:createUser()
})
    
})

app.get("/api/companies/new", (request,response)=> {
    const createCompany = () => {
        const newCompany = {
        _id:faker.datatype.number(),
        name:faker.company.companyName(),
        address:{
            street:faker.address.streetName(),
            city:faker.address.city(),
            state:faker.address.state(),
            zipcode:faker.address.zipCode(),
            country:faker.address.country(),
        }        
        };
        return newCompany;        
    }
response.json({
    company:createCompany()
})
    
})

app.get("/api/user/company", (request,response)=> {
     const createUser = () => {
        const newUser = {
        _id:faker.datatype.number(),
        firstName:faker.name.firstName(),
        lastName:faker.name.lastName(),
        phoneNumber:faker.phone.phoneNumber(),
        email:faker.internet.email(),
        password:faker.internet.password()
        };
        return newUser;        
    }
    const createCompany = () => {
        const newCompany = {
        _id:faker.datatype.number(),
        name:faker.company.companyName(),
        address:{
            street:faker.address.streetName(),
            city:faker.address.city(),
            state:faker.address.state(),
            zipcode:faker.address.zipCode(),
            country:faker.address.country(),
        }        
        };
        return newCompany;        
    }
response.json({
    user:createUser(),
    company:createCompany()
})
    
})

app.listen(8000,() => console.log("You have successfully connected to port 8000"))