import numpy as np
from flask import Flask, request, jsonify, render_template
import sumup as SU

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', title = "No Title Found!!", article = "Please Add Article for Summary")

@app.route('/predict',methods=['GET', 'POST'])
def predict():
    if request.method == 'POST':
        result = request.form
        f = open("article.txt", "w")
        f.write(str(result["article"]))
        f.close()
    
    return render_template('index.html', title = result["title"], article = SU.generate_summary("article.txt", 2))

if __name__ == "__main__":
    app.run(port=8000)
