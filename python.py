from flask import Flask, render_template, request

app = Flask(__name__)

# Dummy database to store user information
users = []

# Signup route
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        # Get user input from the signup form
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']
        
        # Check if the username is already taken
        if any(user['username'] == username for user in users):
            return render_template('signup.html', message='Username already taken')
        
        # Create a new user dictionary
        user = {
            'username': username,
            'password': password,
            'email': email
        }
        
        # Add the user to the database
        users.append(user)
        
        # Redirect to a success page or perform other actions
        return render_template('success.html', username=username)
    
    # If the request method is GET, show the signup form
    return render_template('signup.html')


if __name__ == '__main__':
    app.run(debug=True)
