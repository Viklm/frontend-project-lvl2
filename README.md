### Hexlet tests and linter status:
[![Actions Status](https://github.com/Viklm/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Viklm/frontend-project-lvl2/actions)
[![Node.js CI](https://github.com/Viklm/frontend-project-lvl2/actions/workflows/node.js.yml/badge.svg)](https://github.com/Viklm/frontend-project-lvl2/actions/workflows/node.js.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/cc263b0b652a1d4baca3/maintainability)](https://codeclimate.com/github/Viklm/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/cc263b0b652a1d4baca3/test_coverage)](https://codeclimate.com/github/Viklm/frontend-project-lvl2/test_coverage)
### Difference Generator.
This utility will allow you to compare two files with the extension json or yaml. The output format is available in three variants: stylish, plain and json.

### Install.
```
$ git clone https://github.com/Viklm/frontend-project-lvl2.git
$ cd frontend-project-lvl2
$ make install
$ gendiff
```
### Comparison of json and yaml files.

### Output format 'stylish'
```
$ gendiff file1.json file2.json
$ gendiff file1.yml file2.yaml
```
[![asciicast](https://asciinema.org/a/440283.svg)](https://asciinema.org/a/440283) Output format 'stylish'
### Output format 'plain'
```
$ gendiff -f, --format plain file1.json file2.json
$ gendiff -f, --format plain file1.yaml file2.yml
```
[![asciicast](https://asciinema.org/a/440285.svg)](https://asciinema.org/a/440285) Output format 'plain'
### Output format 'json'
```
$ gendiff -f, --format json file1.json file2.json
$ gendiff -f, --format json file1.yaml file2.yml
```
[![asciicast](https://asciinema.org/a/440286.svg)](https://asciinema.org/a/440286) Output format 'json'