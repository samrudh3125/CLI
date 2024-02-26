const mongoose=require('mongoose');
const Customer=require('./models/customer');

mongoose.Promise=global.Promise;

const db=mongoose.connect("Your mongoDB connection string");

const addCustomer=(customer)=>{
    Customer.create(customer).then(customer=>{
        console.info('New Customer Added');
        mongoose.connection.close();
    });
}

const findCustomer=(name)=>{
    const search= new RegExp(name,'i');
    Customer.find({$or:[{firstname:search},{lastname:search}]})
    .then(customer=>{
        console.info(customer);
        console.info(`${customer.length} matches`);
        mongoose.connection.close();
    }
    );
} 

const updateCustomer=(_id,customer)=>{
    Customer.findByIdAndUpdate(_id,customer)
    .then(customer=>{
        console.info('Customer Updated');
        mongoose.connection.close();
    });
}

const removeCustomer=(_id)=>{
    Customer.findByIdAndDelete(_id)
    .then(customer=>{
        console.info('Customer Rwqmoved');
        mongoose.connection.close();
    });
}

const listCustomers=()=>{
    Customer.find()
    .then(customers=>{
        console.info(customers);
        console.info(`${customers.length} customers`);
        mongoose.connection.close();
    });
}

module.exports={addCustomer,findCustomer,updateCustomer,removeCustomer,listCustomers};

