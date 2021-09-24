install: #Установить зависимости
	npm ci
publish:
	npm publish --dry-run
lint:
	npx eslint .
rec: #Запись терминала
	asciinema rec
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage