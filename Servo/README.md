# DeepServo

A small implementation of convNetJS using a [servo system data set](http://archive.ics.uci.edu/ml/datasets/Servo).

The idea here was to test categorical feature embedding, as it is used in [Natural Language Processing](https://en.wikipedia.org/wiki/Natural_language_processing). More informations about NLP in [here](http://colah.github.io/posts/2014-07-NLP-RNNs-Representations/).

This method is inspired by this [paper](Artificial Neural Networks Applied to Taxi Destination Prediction) on predicting taxi destinations using neural networks and feature embedding.

The main idea is to project the values of each categorical feature onto a multi dimensional space, using random coordinates. Then, each attribute of a categorical feature will have a numerical representation.
As such, this embedding doesn't have any impact, since each attribute has a fixed representation; whether it's projected or not is not relevant.
What's interesting in this approach is that we update the representation of each attribute using the appropriate backpropagation gradients, at each step of the learning.

At the end, each randomly initialized projection will adjust and converge to a meaningful - with regards to the model - representation of the attribute.

This gives a meaning to categorical features, and helps to understand how each attribute affects the model: two attributes with similar projections at the end of the learning have a similar influence on the model.
Once converged, an input representation should help the model to train better since it is optimized to fit the observations according to its meaning.

Be careful though, the converged representations depend on the initialized values, which are random. This means each run will output different representations. But the relations between those representations will remain the same.

## Downloading the data:

```
make download
```

## Learn

*Without embedding*
```
node learn.js
```

*With embedding and input representation update*
```
node learnWithCatProj.js
```

## Some results

Be careful, we didn't care about overfitting.
If you use our method without embedding, you will face massive overfitting (we loop through the same dataset over and over), so you should have very very good results (something like a 0.97 Pearson).

If you use our method with embedding, the training results won't be as good as without embedding, because there is almost no overfitting. Indeed, since we update the inputs' representation at every step, the model can't learn "by heart". 

