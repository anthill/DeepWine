ECHO_SUCCESS=@echo " \033[1;32m✔\033[0m  "

all: download

download:
	@rm -rf data
	@mkdir data
	@wget -O data/whites.csv http://archive.ics.uci.edu/ml/machine-learning-databases/wine-quality/winequality-white.csv

convert:
	@node index.js