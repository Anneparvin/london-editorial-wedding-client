import React from 'react';

const Blog = () => {
    return (
        <div>
            {/* ques-1 */}
                <div className="card w-50rem mb-12 mt-12 bg-success text-primary-content">
                <div className="card-body">
                <h2 className="card-title text-4xl font-bold ">1..What is the difference between SQL and noSQL?</h2>
                <br/>    
                <p className='text-2xl '>#ANS:difference between SQL and noSQL-<br/>  
                1..SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.<br/> 
                2..SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.<br/>  
                3..SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
                </div>
            {/* ques-2 */}
                <div className="card w-50rem mb-12 bg-success text-primary-content">
                <div className="card-body">
                <h2 className="card-title text-4xl font-bold ">2..What is JWT?How does it work?</h2>
                <br/>    
                <p className='text-2xl '>#ANS:JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).<br/>
                JSON web tokens work in rest api....<br/> 
                Once verified, the API will create a JSON Web Token and sign it using a secret key. Then, the API will return that token back to the client application. Finally, the client app will receive the token, verify it on its own side to ensure it's authentic, and then use it on every subsequent request. 
                </p>
                </div>
                </div>
            {/* ques-3 */}
                <div className="card w-50rem mb-12 bg-success text-primary-content">
                <div className="card-body">
                <h2 className="card-title text-4xl font-bold ">3..What is the difference between Javascript and NodeJS?</h2>
                <br/>    
                <p className='text-2xl '>#ANS:difference between Javascript and NodeJS-<br/>  
                1..Javascript is a programming language that is used for writing scripts on the website, while NodeJS is a Javascript runtime environment.<br/> 
                2..Javascript can only be run in the browsers, while NodeJS help the Javascript to run outside browser<br/>  
                3..Javascript basically used on the client-side, while NodeJS mostly used on the server-side.<br/> 
                4..Javascript is used in frontend development, while Nodejs is used in server-side development.</p>
                </div>
                </div>
            {/* ques-4 */}
                <div className="card w-50rem mb-12 bg-success text-primary-content">
                <div className="card-body">
                <h2 className="card-title text-4xl font-bold ">4..How does NodeJS handle Multiple requests at the same time?</h2>
                <br/>    
                <p className='text-2xl '>#ANS: NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.<br/>
                As is, node. js can process upwards of 1000 requests per second and speed limited only to the speed of your network card. Note that it's 1000 requests per second not clients connected simultaneously. It can handle the 10000 simultaneous clients without issue.</p>
                </div>
                </div>
           
        </div>
    );
};

export default Blog;