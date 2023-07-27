from flask import Flask, render_template, url_for, request, send_from_directory, jsonify
from dotenv import load_dotenv
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
load_dotenv()

api_url = os.getenv('API_URL')

@app.route("/")
def client():
    return send_from_directory('client/public', 'index.html')

@app.route("/<path:path>")
def base(path):
    return send_from_directory('client/public', path)

# API endpoint for Svelte to communicate with.
@app.route('/say-hi', methods=['POST'])
def say_hi():
    data = request.get_json()
    name = data.get('name')
    response_data = {'message': f'Hello {name}'}
    return jsonify(response_data)


if __name__ == '__main__':
    app.run(host='localhost', port=2000, debug=True)