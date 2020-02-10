<h1>Machine Learning Challenge - Image Classification</h1>

<a href="https://github.com/cemoga/machine_learning-challenge"><img alt="GitHub stars" src="https://img.shields.io/github/stars/cemoga/machine_learning-challenge?color=yellow"></a>
<a href="https://github.com/cemoga/machine_learning-challenge"><img alt="GitHub forks" src="https://img.shields.io/github/forks/cemoga/machine_learning-challenge?color=yellow"></a>
<a href="https://github.com/cemoga/machine_learning-challenge"><img alt="GitHub issues" src="https://img.shields.io/github/issues/cemoga/machine_learning-challenge"></a>
<a href="https://github.com/cemoga/machine_learning-challenge"><img alt="GitHub license" src="https://img.shields.io/github/license/cemoga/machine_learning-challenge?color=red"></a>

<h2>Description</h2>
<h4>The purpose of this project is to display working knowledge in the areas of machine learning through pre-trained models and data visualization. The models used in this project were: VGG16, VGG19 and RESNET50</h4>
<h4>Tools used in this project: </h4>
    
## Python Libraries
<ul>
<li>Matplotlib 1</li>
<li>Numpy</li>
<li>TensorFlow</li>
<li>Keras</li>
<li>Flask</li>
<li>sklearn</li>
<li>cv2</li>
<li>random</li>
<li>OS</li>
<li>Math</li>
<li>tqdm</li>
</ul>      
  </ol></ul>
  <li>HTML</li>
  <li>Javascript Libraries</li>
   <li>Google Charts</li>
    </ol></ul>
</ol>

## Instructions
<p> To run this code, ensure that all the above libraries are installed in your environment</p>
<b> Important Note:</b>
It is only necessary to run the `app.py` `Python Flask App`.

#### Steps
1. - Run the `Flask` server by running the `app.py` file.
2. - Run the IP address created by the `Flask` server which should look like http://127.0.0.1:5000/ or similar. This renders the index.html file containing the visualizations.
3. - Upload an image of your choosing to run through the ML models. The predictions and accuracies will be displayed on the HTML page.

# File Description

## API Python
<b> Important Note:</b>
It is only necessary to run the `app.py` `Python Flask App`.

### Files in Folder
1. `model_predictions.ipynb` is the master notebook that runs all predictions though pre-trained models.
2. 
3. 

## src/app.py
This file contains the `Python` code necessary to create a `Flask` development server to deploy the visualizations created using `Javascript` libraries.

## src/static
This folder contains all the `Javascript` code used to create the visualizations displayed through the HTML files.
### Contents of Static
1. `CSS` Folder containing CSS for html files.
2. `image` Folder that temporarily stores the user uploaded image.
3. `predictions.js` File that includes the formatting for the predictions page.

## src/templates
This folder contains all the `HTMl` code used to display all the visualizations generated by using the `Javascript` code and `libraries`.

### Contents of templates
1. `predictions.html` Page which displays original image, prediction details and guage. 
2. `upload.html` Page which allows user to upload an image.


#### Authored by: Bill Bastan, Cesar Mosquera, Malini Murthy, Duyen Nguyen, Roma Patel, Nitin Sharma




