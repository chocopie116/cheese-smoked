install:
	npm install

setup:
	cp -f .env.sample .env

find-dash-button-address:
	@echo 'push dash button on same network. dash button mac address will show'
	sudo node node_modules/node-dash-button/bin/findbutton

run:
	@# sudo -E means extending env vars
	source .env && sudo -E node app.js
