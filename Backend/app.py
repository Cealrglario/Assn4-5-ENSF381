from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

users = []
print(users)    

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
            return jsonify({'message': 'User authentication successful! Redirecting...', 'authenticated': True})
        
    return jsonify({'message': 'User authentication failed. Incorrect username or password.', 'authenticated': False})

if __name__ == '__main__':
    app.run()
