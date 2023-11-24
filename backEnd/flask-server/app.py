from flask import Flask, render_template, request,redirect, jsonify
from model import predictor
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['image']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    file.save('../loadedImages/flask-server_' + file.filename)
    output = predictor('../loadedImages/flask-server_' + file.filename)
    print(output)
    
    if output>0.5:
        data = {'message': "This is Rice Gall Midge"}
        print("This is Rice Gall Midge")
    else:
        data = {'message': "This is Brown Plant Hopper"}
        print("This is Brown Plant Hopper")

    return jsonify(data), 200

if __name__ == "__main__":
    app.run(debug=True)