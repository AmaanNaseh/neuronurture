from pandas import read_csv
from matplotlib import pyplot

# 6 ML Algorithm
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.naive_bayes import GaussianNB
from sklearn.svm import SVC


from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_val_score
from sklearn.model_selection import StratifiedKFold

dataset = read_csv("train.csv")
print(dataset.shape)

array = dataset.values
X = array[:,0:9]
y = array[:,10]
X_train, X_validation, Y_train, Y_validation = train_test_split(X, y, test_size=0.20, random_state=1, shuffle=True)

models = []
models.append(('SVM', SVC(gamma='auto')))

results = []
names = []
res = []
for name, model in models:
    kfold = StratifiedKFold(n_splits=10, random_state=None)
    cv_results = cross_val_score(model, X_train, Y_train, cv=kfold, scoring='accuracy')
    results.append(cv_results)
    names.append(name)
    res.append(cv_results.mean())
    print('%s: %f (%f)' % (name, cv_results.mean(), cv_results.std()))

pyplot.ylim(.830, .890)
pyplot.bar(names, res, color ='maroon', width = 0.6)
pyplot.title('Algorithm Comparison')
pyplot.show()

import pickle
filename = 'model.pkl'
pickle.dump(models, open(filename, 'wb'))

#Load
loaded_model = pickle.load(open(filename, 'rb'))
