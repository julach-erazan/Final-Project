import tensorflow as tf
import numpy as np
from tensorflow.keras import models,layers
import cv2

#Load Model
model = tf.keras.models.load_model('../../static/model/myModel.h5')

def predictor(input):
    img = cv2.imread(input)
    #resize image
    resize = tf.image.resize(img,(128,128))
    #Predicted Value
    predictedValue = model.predict(np.expand_dims(resize/255, 0))
    return predictedValue