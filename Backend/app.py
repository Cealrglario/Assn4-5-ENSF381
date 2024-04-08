from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

users = []
products = [
    {
        "id": 1,
        "name": "Product 1",
        "description": "Description for Product 1",
        "price": 10.99,
        "image": 'images/product1.png'
    },
    {
        "id": 2,
        "name": "Product 2",
        "description": "Description for Product 2",
        "price": 20.99,
        "image": 'images/product2.jpg'
    },
    {
        "id": 3,
        "name": "Product 3",
        "description": "Description for Product 3",
        "price": 10.99,
        "image": 'images/product3.jpg'
    },
    {
        "id": 4,
        "name": "Product 4",
        "description": "Description for Product 4",
        "price": 10.99,
        "image": 'images/product4.jpg'
    },
    {
        "id": 5,
        "name": "Product 5",
        "description": "Description for Product 5",
        "price": 10.99,
        "image": 'images/product5.jpg'
    },
    {
        "id": 6,
        "name": "Product 6",
        "description": "Description for Product 6",
        "price": 10.99,
        "image": 'images/product6.jpg'
    },
    {
        "id": 7,
        "name": "Product 7",
        "description": "Description for Product 7",
        "price": 10.99,
        "image": 'images/product7.jpg'
    },
    {
        "id": 8,
        "name": "Product 8",
        "description": "Description for Product 8",
        "price": 10.99,
        "image": 'images/product8.jpg'
    },
    {
        "id": 9,
        "name": "Product 9",
        "description": "Description for Product 9",
        "price": 10.99,
        "image": 'images/product9.jpg'
    },
    {
        "id": 10,
        "name": "Product 10",
        "description": "Description for Product 10",
        "price": 10.99,
        "image": 'images/product10.jpg'
    }
]   

@app.route('/registration', methods=['POST'])
def user_registration():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    new_user = {'password': password, 'email': email, 'username': username}

    for user in users:
        if user['username'] == new_user['username']:
            return jsonify({'message': "Registration failed. user already exists."})
    
    users.append(new_user)
    return jsonify({'message': "Registration successful! You may now login with your username and password."})

@app.route('/authentication', methods=['POST'])
def user_authentication():
    data = request.json
    entered_username = data.get('username')
    entered_password = data.get('password')

    for user in users:
        if user['username'] == entered_username and user['password'] == entered_password:
            return jsonify({'message': 'User authentication successful!', 'authenticated': True})
        
    return jsonify({'message': 'User authentication failed. Incorrect username or password.', 'authenticated': False})

@app.route('/get_products', methods=['GET'])
def get_products():
    return jsonify(products)

if __name__ == '__main__':
    app.run()
