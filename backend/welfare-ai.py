
from flask import Flask, request, jsonify
from openai import OpenAI
from flask_cors import CORS

client = OpenAI()

# Initialize Flask app
app = Flask(__name__)
CORS(app, resources={r"/question": {"origins": "http://localhost:4200"}})
# Define function to generate prompt dynamically
def generate_prompt():
    prompt = """

Welcome to our Welfare Schemes Assistance service! How can I assist you with information about welfare schemes in India? Whether you're seeking details on enrollment, eligibility criteria, application procedures, or the benefits provided by various schemes, feel free to ask. Let's explore how you can access and benefit from welfare schemes aimed at enhancing the well-being of citizens across India. Ask away! I will always give response in points 1, 2, 3, 4, 5, with maximum 5 points
    """
    return prompt

# Define API endpoint
@app.route('/question', methods=['POST'])
def predict_career():
    query = request.json.get('query')
    print("Query", query)
    # Generate prompt dynamically
    prompt = generate_prompt()

    # Example query
    example_query = query

    # Call OpenAI API
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": prompt},
            {"role": "user", "content": example_query}
        ],
        max_tokens=500
    )

    # Return the predicted career as JSON response
    print(response.choices[0].message.content)
    return jsonify({'predicted_career': response.choices[0].message.content})

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
