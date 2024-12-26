from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/active-users', methods=['GET'])
def active_users():
    # Mock response; replace with real-time data logic
    return jsonify({'active_users': 5})

@app.route('/api/log', methods=['POST'])
def log_details():
    data = request.json
    print(f"User details logged: {data}")
    return jsonify({'status': 'success'})

if __name__ == '__main__':
    app.run(debug=True)
