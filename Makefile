install: #Установить зависимости
	npm ci
publish:
	npm publish --dry-run
lint:
	npx eslint .
rec: #Запись терминала
	asciinema rec
gendiff:
	node bin/gendiff.js