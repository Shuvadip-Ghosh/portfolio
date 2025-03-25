from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

# Database configuration (Replace with your actual PostgreSQL credentials)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://neondb_owner:npg_qAGg6vFJey2N@ep-blue-pine-a4q7q26j-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Define the model for storing contact form submissions
class ContactSubmission(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    message = db.Column(db.Text, nullable=False)

    def __init__(self, name, email, message):
        self.name = name
        self.email = email
        self.message = message

# Create the database tables before the first request
with app.app_context():
    db.create_all()

# Route to handle form submissions
@app.route('/submit-form', methods=['POST'])
def submit_form():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if not name or not email or not message:
        return jsonify({"message": "All fields are required!"}), 400

    # Save the data to PostgreSQL
    new_entry = ContactSubmission(name, email, message)
    db.session.add(new_entry)
    db.session.commit()

    return jsonify({"message": "Message sent and saved to database!"})

if __name__ == "__main__":
	app.run(host="0.0.0.0", debug=False)
